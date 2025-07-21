// NavContext.tsx
'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useUserAuth } from '@/app/contexts/AuthContext';

interface NavContextType {
    hasUID: boolean;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

interface NavProviderProps {
    children: ReactNode;
}

export const NavProvider: React.FC<NavProviderProps> = ({ children }) => {
    const { user } = useUserAuth();
    const [hasUID, setHasUID] = useState<boolean>(!!user?.uid);

    useEffect(() => {
        setHasUID(!!user?.uid);
    }, [user?.uid]);

    return (
        <NavContext.Provider value={{ hasUID }}>
            {children}
        </NavContext.Provider>
    );
};

export const useNav = (): NavContextType => {
    const context = useContext(NavContext);
    if (!context) {
        throw new Error('useNav must be used within a NavProvider');
    }
    return context;
};
