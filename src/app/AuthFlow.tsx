'use client';
import "./globals.css";
import LoginScreen from "@/app/screens/auth/LoginScreen";

export default function AuthFlow() {
    let login = true;



    return (
        <div className={"max-h-screen min-h-lvh"}>
            login === true ? <LoginScreen/>
        </div>
    );
}
