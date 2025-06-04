// DashboardScreen.jsx

import ProgressBar from "@/app/components/ProgressBar";
import React from "react";
import CalendarButton from "@/app/components/CalendarButton";

import Announcement from "@/app/components/Announcement";
import Dashboard from "@/app/components/Dashboard";
import Header from "@/app/components/Header";
import BottomNav from "@/app/components/Footer";

const DashboardScreen = () => {
    return (
        <div className="max-h-screen min-h-lvh bg-[#2F3438] flex flex-col items-start justify-start w-full">
            {/* Top section with horizontal padding */}
            <Header />
            <div className="w-full px-5">
                <div className="w-3/4 animate__animated animate__fadeInUp duration-25 fast">
                    <ProgressBar percentage={72} />
                </div>
                <Announcement />
                <div className="mt-4 w-full max-w-1/16 " />
                <div className={"animate__animated animate__fadeInUp duration-25 fast"}>
                    <CalendarButton />
                </div>
            </div>
            <Dashboard/>
            <BottomNav selected={"home"} />
        </div>
    );
};

export default DashboardScreen;
