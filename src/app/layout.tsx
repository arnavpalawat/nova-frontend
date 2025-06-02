'use client';
import { useState } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthenticatedFlow from "@/app/AuthenticatedFlow";
import AuthFlow from "@/app/AuthFlow";

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
        <div className={"min-h-screen"}>
            {handleFlows()}
        </div>
        </body>
        </html>
    );
}