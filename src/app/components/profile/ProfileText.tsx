// components/ProfileText.jsx
import React from 'react';

interface ProfileTextProps {
    name: string;
    role: string;
}

const ProfileText: React.FC<ProfileTextProps> = ({ name, role }) => {
    return (
        <div className="text-center mt-4">
            <h2 className="text-white font-semibold text-xl font-['SF_Pro_Text']">{name}</h2>
            <p className="text-gray-400 text-base font-['SF_Pro_Text']">{role}</p>
        </div>
    );
};

export default ProfileText;
