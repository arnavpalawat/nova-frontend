import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileButton from "@/app/components/profile/SettingsButtons";
import ProfileText from "@/app/components/profile/ProfileText";
import ProfileCircle from "@/app/components/profile/ProfileCircle";
import Header from "@/app/components/Header";
import BottomNav from "@/app/components/Footer";
import GlassCard from "@/app/components/ui/GlassCard";
import SettingsSection from "@/app/components/ui/SettingsSection";
import LoadingSpinner from "@/app/components/ui/LoadingSpinner";
import Toggle from "@/app/components/ui/Toggle";
import { auth } from "@/app/firebase";
import { signOut, deleteUser } from "firebase/auth";
import { useUserAuth } from "@/app/contexts/AuthContext";
import { getUserName } from "@/app/ApiService";
import { useEvent } from "@/app/contexts/EventContext";
import EventSelectorDropdown from "@/app/components/ui/EventSelectorDropdown";

const ProfilePage = () => {
    const { user } = useUserAuth();
    const { event } = useEvent();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [nameLoading, setNameLoading] = useState(true);

    // Settings state - only dark mode now
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [selectedEvent, setSelectedEvent] = useState("Entrepreneurship");
    const [pendingEvent, setPendingEvent] = useState("Entrepreneurship");
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

    useEffect(() => {
        const fetchName = async () => {
            if (user?.uid) {
                try {
                    setNameLoading(true);
                    const fetchedData = await getUserName(user.uid);
                    setName(fetchedData?.name || "Unnamed User");
                } catch (error) {
                    console.error("Failed to fetch user name:", error);
                    setName("Unnamed User");
                } finally {
                    setNameLoading(false);
                }
            } else {
                setName("Unnamed User");
                setNameLoading(false);
            }
        };

        fetchName();

        // Load dark mode setting from localStorage
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode !== null) {
            setIsDarkMode(savedDarkMode === 'true');
        }

        // Load selected event from localStorage
        const savedEvent = localStorage.getItem('selectedEvent');
        if (savedEvent) {
            setSelectedEvent(savedEvent);
            setPendingEvent(savedEvent);
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

    const handleEventChange = (event: string) => {
        setPendingEvent(event);
        setHasUnsavedChanges(event !== selectedEvent);
    };

    const handleConfirmEventChange = () => {
        setSelectedEvent(pendingEvent);
        localStorage.setItem('selectedEvent', pendingEvent);
        setHasUnsavedChanges(false);
    };

    const handleCancelEventChange = () => {
        setPendingEvent(selectedEvent);
        setHasUnsavedChanges(false);
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
                        {nameLoading ? (
                            <div className="py-2">
                                <LoadingSpinner size="sm" text="" className="h-12" />
                            </div>
                        ) : (
                            <ProfileText name={name} role="Student" />
                        )}
                    </div>
                </GlassCard>

                {/* Settings Sections */}
                <div className="grid grid-cols-1 gap-6">
                    {/* Preferences - Only Dark Mode */}
                    {/* Account Actions */}
                    <SettingsSection
                        title="Account"
                        description="Manage your account settings"
                        className="animate-[fadeInUp_1.1s_ease-out]"
                    >
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <ProfileButton label="Sign Out" variant="signout" onClick={handleSignOut} />
                            <ProfileButton label="Delete Account" variant="danger" onClick={handleDelete} />
                        </div>
                    </SettingsSection>

                    {/* Change Events Section */}
                    <SettingsSection
                        title="Change Events"
                        description="Select your competition event"
                        className="animate-[fadeInUp_0.9s_ease-out]"
                    >
                        <div className="space-y-4">
                            <div className="flex flex-col">
                                <label className="text-sm dark:text-gray-400 text-gray-600 mb-2 font-['SF_Pro_Text']">
                                    Current Event
                                </label>
                                <EventSelectorDropdown
                                    selectedEvent={pendingEvent}
                                    onEventChange={handleEventChange}
                                />
                            </div>

                            {hasUnsavedChanges && (
                                <div className="flex gap-3 pt-2">
                                    <button
                                        onClick={handleConfirmEventChange}
                                        className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-200 font-medium font-['SF_Pro_Text']"
                                    >
                                        Confirm Selection
                                    </button>
                                    <button
                                        onClick={handleCancelEventChange}
                                        className="flex-1 px-4 py-2 dark:bg-gray-700/50 bg-gray-300/70 dark:hover:bg-gray-600/50 hover:bg-gray-400/80 dark:text-gray-200 text-gray-800 rounded-xl transition-all duration-200 font-medium font-['SF_Pro_Text']"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </div>
                    </SettingsSection>


                </div>

                {/* Unsaved changes confirmation */}
                {hasUnsavedChanges && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm mx-auto">
                            <p className="text-gray-800 dark:text-gray-200 mb-4">
                                You have unsaved changes. Do you want to save them?
                            </p>
                            <div className="flex justify-end gap-2">
                                <button
                                    onClick={handleConfirmEventChange}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Yes, save
                                </button>
                                <button
                                    onClick={handleCancelEventChange}
                                    className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-400 transition-colors"
                                >
                                    No, discard
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Bottom spacing for navigation */}
                <div className="h-24"></div>
            </div>

            <BottomNav selected="settings" />
        </div>
    );
};

export default ProfilePage;

