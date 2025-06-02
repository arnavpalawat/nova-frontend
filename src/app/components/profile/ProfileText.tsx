// components/ProfileText.jsx
import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const ProfileText = ({ name, role }) => {
    return (
        <div className="text-center mt-4">
            <h2 className="text-white font-semibold text-xl">{name}</h2>
            <p className="text-white text-lg">{role}</p>
        </div>
    );
};

export default ProfileText;
