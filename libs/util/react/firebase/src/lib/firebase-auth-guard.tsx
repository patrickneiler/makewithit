'use client';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { auth } from './util-react-firebase';

export const FirebaseAuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push('/signin');
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return <>{children}</>;
};

export default FirebaseAuthGuard;
