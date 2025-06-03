import React, {JSX} from 'react';

export default function AuthForm({ children, onSubmit }: { children: React.ReactNode, onSubmit?: React.FormEventHandler }): JSX.Element {
    return (
        <form className="space-y-4" onSubmit={onSubmit}>
            {children}
        </form>
    );
}
