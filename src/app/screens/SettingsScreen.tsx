'use client';
import { useNavigate } from 'react-router-dom';

import React from 'react';
import ProfileButton from "@/app/components/profile/SettingsButtons";
import ProfileText from "@/app/components/profile/ProfileText";
import ProfileCircle from "@/app/components/profile/ProfileCircle";
import Header from "@/app/components/Header";
import BottomNav from "@/app/components/Footer";
import {auth} from "@/app/firebase";
import {signOut, deleteUser} from "firebase/auth";
import {useUserAuth} from "@/app/AuthContext";

const ProfilePage = () => {
    const { user } = useUserAuth();

    async function handleSignOut() {
        await signOut(auth).then(() => {navigate("/login")});
    }
    async function handleDelete() {
        if (user) {
            await deleteUser(user).then(() => {
                navigate("/login")
            });
        } else {
            alert("User does not exist!");
        }
    }


    const navigate = useNavigate();
    return (

        <div className="bg-[#2F3438] min-h-screen space-y-4 w-screen">
            <Header />
            <ProfileCircle />
            <div className="animate__animated animate__fadeInUp">
                <ProfileText name="Krish Parmar" role="Student" />
            </div>
            <div className={"p-6"}>
                <div className="mt-6 flex gap-4 justify-center animate__animated animate__fadeInUp">
                    <ProfileButton label="Snap Raise" onClick={null} />
                    <ProfileButton label="Change Events" onClick={null} />
                </div>
                <div className="mt-6 flex gap-4 justify-center animate__animated animate__fadeInUp">
                    <ProfileButton label="Contact Advisors" onClick={null} />
                    <ProfileButton label="Deca MA-03" onClick={null} />
                </div>
                <div className="my-10"></div>
                <div className="animate__animated animate__fadeInUp">
                    <ProfileButton label="Sign Out" variant="signout" onClick={handleSignOut} />
                </div>
                <div className="my-5"></div>

                <div className="animate__animated animate__fadeInUp">
                    <ProfileButton label="Delete your Account" variant="danger" onClick={handleDelete} />
                </div>
            </div>

            <BottomNav selected={"settings"} />

        </div>
    );
};

export default ProfilePage;
