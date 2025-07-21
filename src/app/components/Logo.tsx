import React from 'react';

function Logo() {
    return (
        <div className="flex items-center justify-center w-full">
            <div className="relative">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent tracking-tight">
                    NOVA
                </h1>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
        </div>
    );
}

export default Logo;