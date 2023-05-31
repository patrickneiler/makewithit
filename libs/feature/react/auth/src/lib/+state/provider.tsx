'use client';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '@the/util/react/firebase';
import { AppDispatch } from '@the/makewith/react/data-access';
import { useDispatch } from 'react-redux';
import { fetchUser, userActions } from '@the/data-access/user';
import { fetchOrganizations } from '@the/data-access/organization';
import { fetchStudies } from '@the/data-access/study';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (_user) => {
            if (_user) {
                const uid = _user.uid;
                dispatch(fetchUser(uid));
                dispatch(fetchOrganizations());
                dispatch(fetchStudies());
            } else {
                dispatch(userActions.clear(null))
            }
        });

        return () => {
            unsubscribe();
        };
    }, [dispatch]);

    return (
        <>
            {children}
        </>
    )
};

export default AuthProvider;
