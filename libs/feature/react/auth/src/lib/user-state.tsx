'use client';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { auth, firestore } from '@the/util/react/firebase';
import { UserContext } from '@the/makewith/react/data-access';

export const UserState: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { addUser, removeUser } = useContext(UserContext);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (_user) => {
            if (_user) {
                // Query the "users" collection for the user with the matching UID
                const usersRef = collection(firestore, "users");
                const q = query(usersRef, where("uid", "==", _user.uid));
                onSnapshot(q, (snapshot) => {
                    if (!snapshot.empty) {
                        const data = snapshot.docs[0].data();
                        addUser(data as User);
                    } else {
                        removeUser();
                    }
                })
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return <>{children}</>;
};

export default UserState;
