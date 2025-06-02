'use client';
import "./globals.css";
import LoginScreen from "@/app/screens/auth/LoginScreen";

export default function AuthFlow() {
    let login = true;



    return (
        <div className={"min-h-screen min-w-screen"}>
            login === true ? <LoginScreen/>
        </div>
    );
}
