'use client';
import { useState } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import DashboardScreen from "@/app/screens/DashboardScreen";
import SettingsScreen from "@/app/screens/SettingsScreen";
import BottomNav, { Tab } from "@/app/components/Footer";
import Header from "@/app/components/Header";


export default function AuthenticatedFlow() {
    const [selected, setSelected] = useState<Tab>('home');

    const renderScreen = () => {
        switch (selected) {
            case 'home':
                return (
                    <DashboardScreen />);
            case 'book':
                return <DashboardScreen />;
            case 'settings':
                return <SettingsScreen />;
        }
    };


    return (
        <div className={"min-h-screen min-w-screen"}>
            <Header />
            {renderScreen()}
            <BottomNav selected={selected} setSelected={setSelected} />
        </div>

    );
}
