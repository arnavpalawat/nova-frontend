import React, { JSX } from 'react';
import { NavLink } from 'react-router-dom';
import AuthInput from "@/app/components/auth/AuthInput";
import AuthContainer from "@/app/components/auth/AuthContainer";
import AuthForm from "@/app/components/auth/AuthForm";

export default function LoginScreen(): JSX.Element {
    return (
        <AuthContainer>
            <>
                <h2 className="text-2xl font-bold mb-6 text-center text-[#FFF]">Login</h2>
                <AuthForm>
                    <AuthInput label="Email" type="email" placeholder="you@example.com" required />
                    <AuthInput label="Password" type="password" placeholder="••••••••" required />
                    <button type="submit" className="w-full bg-[#1C1C2E] text-[#A6C8FF] py-2 rounded-xl transition duration-200 hover:bg-[#2a2a3c]">Log In</button>
                </AuthForm>
                <p className="mt-4 text-sm text-center text-[#8d8f93]">
                    Don&#39;t have an account?{' '}
                    <NavLink to="/signup" className="text-[#A6C8FF] hover:underline">Sign up</NavLink>
                </p>
            </>
        </AuthContainer>
    );
}
