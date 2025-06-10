import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileButton from "@/app/components/profile/SettingsButtons";
import ProfileText from "@/app/components/profile/ProfileText";
import ProfileCircle from "@/app/components/profile/ProfileCircle";
import Header from "@/app/components/Header";
import BottomNav from "@/app/components/Footer";
import { auth } from "@/app/firebase";
import { signOut, deleteUser } from "firebase/auth";
import { useUserAuth } from "@/app/AuthContext";
import {getUserExamName, getUserName} from "@/app/ApiService";

const ProfilePage = () => {
    const { user } = useUserAuth();
    const navigate = useNavigate();
    const [name, setName] = useState("Loading...");
    const [event, setEvent] = useState<string>("Loading...");

    useEffect(() => {
        const fetchEvent = async () => {
            if (user?.uid) {
                try {
                    const fetchedData = await getUserExamName(user.uid);
                    setEvent(fetchedData.exam_name || "No Event Found");
                } catch (error) {
                    console.error("Failed to fetch user name:", error);
                    setEvent("Sign In to Start Studying!");
                }
            }
        };

        fetchEvent();
    }, [user]);
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
            }
        };

        fetchName();
    }, [user]);

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
        <div className="bg-[#2F3438] min-h-screen space-y-4 w-screen">
            <Header event={event} />
            <div className={"animate__animated animate__fadeInUp"}>
                <ProfileCircle />
            </div>
            <div className="animate__animated animate__fadeInUp">
                <ProfileText name={name} role="Student" />
            </div>
            <div className="p-6">
                <div className="mt-6 flex gap-4 justify-center animate__animated animate__fadeInUp">
                    <ProfileButton label="Snap Raise" onClick={() => {}} />
                    <ProfileButton label="Change Events" onClick={() => {}} />
                </div>
                <div className="mt-6 flex gap-4 justify-center animate__animated animate__fadeInUp">
                    <ProfileButton label="Contact Advisors" onClick={() => {}} />
                    <ProfileButton label="Deca MA-03" onClick={() => {}} />
                </div>
                <div className="my-10" />
                <div className="animate__animated animate__fadeInUp">
                    <ProfileButton label="Sign Out" variant="signout" onClick={handleSignOut} />
                </div>
                <div className="my-5" />
                <div className="animate__animated animate__fadeInUp">
                    <ProfileButton label="Delete your Account" variant="danger" onClick={handleDelete} />
                </div>
            </div>
            <BottomNav selected={"settings"} />
        </div>
    );
};

export default ProfilePage;
