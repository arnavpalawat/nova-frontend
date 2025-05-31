'use client';
import { useState } from 'react';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DashboardScreen from "@/app/screens/DashboardScreen";
import BottomNav, { Tab } from "@/app/components/Footer";
import Header from "@/app/components/Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


export default function RootLayout() {
    const [selected, setSelected] = useState<Tab>('home');

    return (
        <html lang="en">
        <head>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-y-visible`}>

        <Header />
        <DashboardScreen />
        <BottomNav selected={selected} setSelected={setSelected} />
        </body>
        </html>
    );
}
