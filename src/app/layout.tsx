import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DashboardScreen from "@/app/screens/DashboardScreen";
import BottomNav from "@/app/components/Footer";
import React from "react";
import CategoryButton from "@/app/components/EventSelector";
import Logo from "@/app/components/Logo";
import Header from "@/app/components/Header";


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
        <head>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <Header/>
            <DashboardScreen></DashboardScreen>
            <BottomNav />
        </body>
        </html>
    );
}
