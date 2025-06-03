import React, { JSX } from 'react';

export default function AuthContainer({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element {
    return (
        <div className="min-h-lvh p-0 bg-cover bg-center bg-[url('../assets/images/auth_background.png')] relative">
            <div className="bg-[#2F3438] p-8 rounded-2xl shadow-lg w-full max-w-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate__animated animate__fadeInUp duration-25 fast">
                {children}
            </div>
        </div>
    );
}
