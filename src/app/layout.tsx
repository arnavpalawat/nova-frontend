import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProgressBar from "@/app/components/ProgressBar";
import React from "react";
import CalendarButton from "@/app/components/CalendarButton";
import CategoryButton from "@/app/components/EventSelector";
import BottomNav from "@/app/components/Footer";
import Announcement from "@/app/components/Announcement";
import Dashboard from "@/app/components/Dashboard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nova",
  description: "Next Gen DECA Studying",
};
export default function RootLayout() {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-[#2F3438] flex flex-col items-start justify-start w-full">

            {/* Top section with horizontal padding */}
            <div className="w-full px-5 py-5">
                <CategoryButton />
                <div className="mt-4 w-full max-w-2/4">
                    <ProgressBar percentage={72} />
                </div>
                <Announcement />
                <div className="mt-4 w-full max-w-1/16"></div>
                <CalendarButton />
            </div>
            <Dashboard></Dashboard>
            {/* Bottom navigation */}
            <BottomNav />

        </div>
        </body>
        </html>
    );
}
