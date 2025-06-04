import React, { JSX, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthInput from "@/app/components/auth/AuthInput";
import AuthForm from "@/app/components/auth/AuthForm";
import AuthContainer from "@/app/components/auth/AuthContainer";
import { useUserAuth } from "@/app/AuthContext";

export default function SignupScreen(): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string>('');

    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            setError('');
            await signUp(email, password);
            navigate('/login');
        } catch (err) {
            alert(err);
        }
    };

    return (
        <AuthContainer>
            <>
                <h2 className="text-2xl font-bold mb-6 text-center text-[#FFF]">Sign Up</h2>
                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
                <AuthForm onSubmit={handleSubmit}>
                    <AuthInput
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                    />
                    <AuthInput
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                    />
                    <AuthInput
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                    />
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full bg-[#1C1C2E] text-[#A6C8FF] py-2 rounded-xl transition duration-200 hover:bg-[#2a2a3c]"
                    >
                        Sign Up
                    </button>
                </AuthForm>
                <p className="mt-4 text-sm text-center text-[#8d8f93]">
                    Already have an account?{' '}
                    <Link to="/login" className="text-[#A6C8FF] hover:underline">Sign in</Link>
                </p>
            </>
        </AuthContainer>
    );
}
