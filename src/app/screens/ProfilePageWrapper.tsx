'use client';

import { useNavigate } from 'react-router-dom';
import ProfilePage from "@/app/screens/SettingsScreen";

const ProfilePageWrapper = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Add logout logic here (e.g. Firebase signOut()), then redirect
        navigate('/login');
    };

    return <ProfilePage />;
};

export default ProfilePageWrapper;
