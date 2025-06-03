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
        <Router>
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/signup" element={<SignupScreen />} />
                <Route path="/study" element={<StudyScreen />} />
                <Route path="/settings" element={<SettingsScreen setFlow={undefined} />} />
                {/* You can add a default route or other routes here */}
            </Routes>

            {/* Fallback app rendering if not on /login or /signup */}
            <div className="min-h-screen">
                {handleFlows()}
            </div>
        </Router>
        </body>
        </html>
    );
}
