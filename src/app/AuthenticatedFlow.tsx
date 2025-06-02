'use client';
import { useState } from 'react';
import "./globals.css";

import DashboardScreen from "@/app/screens/DashboardScreen";
import ProfilePage from "@/app/screens/SettingsScreen";
import BottomNav, { Tab } from "@/app/components/Footer";
import Header from "@/app/components/Header";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function AuthenticatedFlow({setFlow}) {
    const [selected, setSelected] = useState<Tab>('home');

    const renderScreen = () => {
        switch (selected) {
            case 'home':
                return (
                    <DashboardScreen />);
            case 'book':
                return <DashboardScreen />;
            case 'settings':
                return <ProfilePage setFlow={setFlow} />;
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
