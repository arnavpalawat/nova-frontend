// DashboardScreen.tsx

import React, { useEffect, useState } from "react";
import ProgressBar from "@/app/components/ProgressBar";
import CalendarButton from "@/app/components/CalendarButton";
import Announcement from "@/app/components/Announcement";
import Dashboard from "@/app/components/Dashboard";
import Header from "@/app/components/Header";
import BottomNav from "@/app/components/Footer";
import { useUserAuth } from "@/app/AuthContext";
import { getUserExamName } from "@/app/ApiService";

const DashboardScreen: React.FC = () => {
    const { user } = useUserAuth();
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

    return (
        <div className="max-h-screen min-h-lvh bg-[#2F3438] flex flex-col items-start justify-start w-full">
            <Header event={event} />
            <div className="w-full px-5">
                <div className="w-3/4 animate__animated animate__fadeInUp duration-25 fast">
                    <ProgressBar percentage={72} />
                </div>
                <Announcement />
                <div className="mt-4 w-full max-w-1/16" />
                <div className="animate__animated animate__fadeInUp duration-25 fast">
                    <CalendarButton />
                </div>
            </div>
            <Dashboard />
            <BottomNav selected="home" />
        </div>
    );
};

export default DashboardScreen;
