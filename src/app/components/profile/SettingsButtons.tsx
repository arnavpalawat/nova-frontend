import React from 'react';
import {ChevronRight} from "lucide-react";

interface ProfileButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'default' | 'signout' | 'danger';
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ label, onClick, variant = 'default' }) => {
    const baseStyle = 'flex justify-between items-center px-6 py-4 rounded-2xl text-sm font-medium w-full transition-all duration-200 ease-in-out';
    const variants = {
        default: 'bg-gray-700/50 text-gray-200 hover:bg-gray-600/50 border border-gray-600/30',
        signout: 'bg-blue-500 text-white hover:bg-blue-600 border border-blue-400/30',
        danger: 'bg-red-500/80 text-white hover:bg-red-600 border border-red-400/30',
    };

    return (
        <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
            <span className="font-['SF_Pro_Text']">{label}</span>
            <ChevronRight className="h-5 w-5" />
        </button>
    );
};

export default ProfileButton;
