import React, { JSX, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthInput from "@/app/components/auth/AuthInput";
import AuthContainer from "@/app/components/auth/AuthContainer";
import AuthForm from "@/app/components/auth/AuthForm";
import { useUserAuth } from "@/app/contexts/AuthContext";

export default function LoginScreen(): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string>('');
    const { logIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setError('');
            await logIn(email, password);
            navigate('/study'); // or wherever you want to send the user after login
        } catch (err: any) {
            setError(err.message || 'Login failed');
        }
    };

    return (
        <AuthContainer>
            <>
                <h2 className="text-2xl font-bold mb-6 text-center text-[#FFF]">Login</h2>
                {error && (
                    <p className="text-red-500 text-sm text-center mb-4">
                        {error}
                    </p>
                )}
                <AuthForm onSubmit={handleSubmit}>
                    <AuthInput
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <AuthInput
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#1C1C2E] text-[#A6C8FF] py-2 rounded-xl transition duration-200 hover:bg-[#2a2a3c]"
                    >
                        Log In
                    </button>
                </AuthForm>
                <p className="mt-4 text-sm text-center text-[#8d8f93]">
                    Don&#39;t have an account?{' '}
                    <NavLink to="/signup" className="text-[#A6C8FF] hover:underline">
                        Sign up
                    </NavLink>
                </p>
            </>
        </AuthContainer>
    );
}
