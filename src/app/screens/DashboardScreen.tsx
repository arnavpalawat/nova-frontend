import React from "react";
import ProgressBar from "@/app/components/ProgressBar";
import CalendarButton from "@/app/components/CalendarButton";
import Announcement from "@/app/components/Announcement";
import Dashboard from "@/app/components/Dashboard";
import Header from "@/app/components/Header";
import BottomNav from "@/app/components/Footer";
import GlassCard from "@/app/components/ui/GlassCard";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { useEvent } from "@/app/contexts/EventContext";

const DashboardScreen: React.FC = () => {
    const { event } = useEvent();

    return (
        <div className="min-h-screen bg-gradient-to-br dark:from-gray-900 dark:to-slate-800 from-gray-100 to-slate-200 flex flex-col w-full overflow-hidden">
            <Header event={event} />

            <div className="flex-1 px-4 sm:px-6 py-4 space-y-6 overflow-y-auto scrollbar-hide">
                {/* Progress Section - Smaller */}
                <div className="bg-gray-800/30 dark:bg-gray-800/30 bg-gray-200/80 backdrop-blur-md rounded-2xl shadow-lg border dark:border-gray-700/30 border-gray-300/50 p-4 animate-[fadeInUp_0.6s_ease-out]">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold dark:text-white text-gray-900">Progress</h3>
                    </div>
                    <div className="w-full max-w-lg">
                        <ProgressBar percentage={72} />
                    </div>
                </div>

                {/* Combined Announcement and Quick Actions */}
                <GlassCard className="animate-[fadeInUp_0.8s_ease-out] space-y-6">
                    {/* Announcement Content */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl p-6 text-center border dark:border-gray-600/20 border-gray-400/30">
                        <div className="space-y-2">
                            <h2 className="text-3xl sm:text-4xl font-light dark:text-white text-gray-900 leading-tight">
                                <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Get Ready
                                </span>
                                <span className="dark:text-gray-300 text-gray-600">...</span>
                            </h2>
                            <p className="text-xl sm:text-2xl dark:text-gray-300 text-gray-700 font-light">
                                <span className="italic text-blue-400">States</span> is in only{" "}
                                <span className="font-bold text-blue-400 text-2xl sm:text-3xl">
                                    29 weeks
                                </span>!
                            </p>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div>
                        <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-4">
                            Quick Actions
                        </h3>
                        <CalendarButton />
                    </div>
                </GlassCard>

                {/* Dashboard Analytics */}
                <div className="animate-[fadeInUp_1s_ease-out]">
                    <Dashboard />
                </div>

                {/* Bottom spacing for navigation */}
                <div className="h-24"></div>
            </div>

            <BottomNav selected="home" />
        </div>
    );
};

export default DashboardScreen;