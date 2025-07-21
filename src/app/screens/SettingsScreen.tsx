import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileButton from "@/app/components/profile/SettingsButtons";
import ProfileText from "@/app/components/profile/ProfileText";
import ProfileCircle from "@/app/components/profile/ProfileCircle";
import Header from "@/app/components/Header";
import BottomNav from "@/app/components/Footer";
import GlassCard from "@/app/components/ui/GlassCard";
import SettingsSection from "@/app/components/ui/SettingsSection";
import Toggle from "@/app/components/ui/Toggle";
import { auth } from "@/app/firebase";
import { signOut, deleteUser } from "firebase/auth";
import { useUserAuth } from "@/app/contexts/AuthContext";
import { getUserName } from "@/app/ApiService";
import { useEvent } from "@/app/contexts/EventContext";

const ProfilePage = () => {
    const { user } = useUserAuth();
    const { event } = useEvent();
    const navigate = useNavigate();
    const [name, setName] = useState("Loading...");

    // Settings state - only dark mode now
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const fetchName = async () => {
            if (user?.uid) {
                try {
                    const fetchedData = await getUserName(user.uid);
                    setName(fetchedData?.name || "Unnamed User");
                } catch (error) {
                    console.error("Failed to fetch user name:", error);
                    setName("Unnamed User");
                }
            } else {
                setName("Unnamed User");
            }
        };

        fetchName();

        // Load dark mode setting from localStorage
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode !== null) {
            setIsDarkMode(savedDarkMode === 'true');
        }

        // Apply dark mode to document
        if (savedDarkMode === 'true' || savedDarkMode === null) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [user]);

    const handleDarkModeToggle = () => {
        const newValue = !isDarkMode;
        setIsDarkMode(newValue);
        localStorage.setItem('darkMode', newValue.toString());

        // Apply/remove dark class to document
        if (newValue) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    const handleDelete = async () => {
        if (user) {
            try {
                await deleteUser(user);
                navigate("/login");
            } catch (error) {
                console.error("Error deleting user:", error);
                alert("Failed to delete user.");
            }
        } else {
            alert("User does not exist!");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 flex flex-col w-full overflow-hidden">
            <Header event={event} />

            <div className="flex-1 px-4 sm:px-6 py-4 space-y-6 overflow-y-auto scrollbar-hide">
                {/* Profile Section */}
                <GlassCard className="text-center animate-[fadeInUp_0.6s_ease-out]">
                    <ProfileCircle />
                    <div className="mt-4">
                        <ProfileText name={name} role="Student" />
                    </div>
                </GlassCard>

                {/* Settings Sections */}
                <div className="grid grid-cols-1 gap-6">
                    {/* Preferences - Only Dark Mode */}
                    <SettingsSection
                        title="Preferences"
                        description="Customize your experience"
                        className="animate-[fadeInUp_0.8s_ease-out]"
                    >
                        <Toggle
                            isEnabled={isDarkMode}
                            onToggle={handleDarkModeToggle}
                            label="Dark Mode"
                        />
                    </SettingsSection>

                    {/* Account Actions */}
                    <SettingsSection
                        title="Account"
                        description="Manage your account settings"
                        className="animate-[fadeInUp_1s_ease-out]"
                    >
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <ProfileButton label="Sign Out" variant="signout" onClick={handleSignOut} />
                            <ProfileButton label="Delete Account" variant="danger" onClick={handleDelete} />
                        </div>
                    </SettingsSection>
                </div>

                {/* Bottom spacing for navigation */}
                <div className="h-24"></div>
            </div>

            <BottomNav selected="settings" />
        </div>
    );
};

export default ProfilePage;