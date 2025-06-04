'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginScreen from "@/app/screens/auth/LoginScreen";
import SignupScreen from "@/app/screens/auth/SignupScreen";
import DashboardScreen from "@/app/screens/DashboardScreen";
import StudyScreen from "@/app/screens/StudyScreen";
import SettingsScreen from "@/app/screens/SettingsScreen";
import ProfilePageWrapper from "@/app/screens/ProfilePageWrapper"; // wrapper for redirect

import { UserAuthContextProvider } from "@/app/AuthContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout() {
    return (
        <html lang="en">
        <head>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-y-visible`}>
        <UserAuthContextProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/signup" element={<SignupScreen />} />
                    <Route path="/" element={<DashboardScreen />} />
                    <Route path="/study" element={<StudyScreen />} />
                    <Route path="/settings" element={<SettingsScreen />} />
                    <Route path="/profile" element={<ProfilePageWrapper />} />
                </Routes>
            </Router>
        </UserAuthContextProvider>
        </body>
        </html>
    );
}
