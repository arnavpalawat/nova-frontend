'use client';

import { useState } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthenticatedFlow from "@/app/AuthenticatedFlow";
import AuthFlow from "@/app/AuthFlow";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from "@/app/screens/auth/LoginScreen";
import SignupScreen from "@/app/screens/auth/SignupScreen";
import StudyScreen from "@/app/screens/StudyScreen";
import SettingsScreen from "@/app/screens/SettingsScreen";
import { UserAuthContextProvider } from "@/app/AuthContext"; // ✅ FIXED IMPORT

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout() {
    const [flow, setFlow] = useState("Post");

    function handleFlows() {
        switch (flow) {
            case 'Auth':
                return <AuthFlow />;
            case 'Post':
                return <AuthenticatedFlow setFlow={setFlow} />;
            default:
                return null;
        }
    }

    return (
        <html lang="en">
        <head>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-y-visible`}>
        <UserAuthContextProvider> {/* ✅ WRAPPED HERE */}
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/signup" element={<SignupScreen />} />
                    <Route path="/study" element={<StudyScreen />} />
                    <Route path="/settings" element={<SettingsScreen setFlow={undefined} />} />
                    {/* Add more routes if needed */}
                </Routes>

                {/* Render Authenticated or Auth Flow */}
                <div className="min-h-screen">
                    {handleFlows()}
                </div>
            </Router>
        </UserAuthContextProvider>
        </body>
        </html>
    );
}
