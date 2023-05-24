/* eslint-disable @typescript-eslint/no-empty-function */
'use client';

import React, { createContext, useState } from 'react';
import { User as FireUser } from 'firebase/auth';

interface User extends FireUser {
    organization?: string;
}

// Create a context with the initial state
interface UserContextType {
    user: Partial<User> | null;
    addUser: (user: Partial<User>) => void;
    removeUser: () => void;
}

const initialUserContext: UserContextType = {
    user: null,
    addUser: () => { },
    removeUser: () => { }
};

// Create the context
const UserContext = createContext<UserContextType>(initialUserContext);

// Create a provider component to wrap your app
const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<Partial<User> | null>(null);

    // Function to add a user to the context state
    const addUser = (newUser: Partial<User>) => {
        setUser(newUser);
    };

    const removeUser = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, addUser, removeUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };

