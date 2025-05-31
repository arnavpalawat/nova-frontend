// DashboardScreen.jsx

import ProgressBar from "@/app/components/ProgressBar";
import React from "react";
import CalendarButton from "@/app/components/CalendarButton";

import Announcement from "@/app/components/Announcement";
import Dashboard from "@/app/components/Dashboard";

const DashboardScreen = () => {
    return (
        <div className="max-h-screen min-h-lvh bg-[#2F3438] flex flex-col items-start justify-start w-full">
            {/* Top section with horizontal padding */}
            <div className="w-full px-5">
                <div className="w-3/4">
                    <ProgressBar percentage={72} />
                </div>
                <Announcement />
                <div className="mt-4 w-full max-w-1/16" />
                <CalendarButton />
            </div>

            <Dashboard />

            {/* Bottom navigation */}

        </div>
    );
};

export default DashboardScreen;
