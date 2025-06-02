import React from 'react';
import {ChevronRight} from "lucide-react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const ProfileButton = ({ label, onClick, variant = 'default' }) => {
    const baseStyle = 'flex justify-between items-center px-6 py-5 rounded-full text-sm font-medium w-1/2';
    const variants = {
        default: 'bg-[#1d1c2d] text-[#848abc]',
        signout: 'bg-[#a5c7fa] text-[#1d1c2d]',
        danger: 'bg-[#a53a39] text-white',
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const vars = variants[variant];
    return (
        <button onClick={onClick} className={`${baseStyle} ${vars}`}>
            <span>{label}</span>
            <ChevronRight className="h-8 w-8" />
        </button>
    );
};

export default ProfileButton;
