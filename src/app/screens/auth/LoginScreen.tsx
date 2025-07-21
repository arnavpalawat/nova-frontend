import React, { JSX, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthInput from "@/app/components/auth/AuthInput";
import AuthContainer from "@/app/components/auth/AuthContainer";
import AuthForm from "@/app/components/auth/AuthForm";
import LoadingSpinner from "@/app/components/ui/LoadingSpinner";
import { useUserAuth } from "@/app/contexts/AuthContext";

export default function LoginScreen(): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const { logIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setError('');
            setIsLoading(true);
            await logIn(email, password);
            navigate('/study');
        } catch (err: any) {
            setError(err.message || 'Login failed');
        } finally {
            setIsLoading(false);
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

                {isLoading ? (
                    <div className="flex justify-center py-8">
                        <LoadingSpinner size="md" text="Signing you in..." className="h-32" />
                    </div>
                ) : (
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
                            disabled={isLoading}
                            className="w-full bg-[#A6C8FF] text-[#2F3438] font-medium py-2 px-4 rounded-lg shadow-md hover:bg-[#89b3ff] hover:shadow-lg transition-all duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Signing In...' : 'Log In'}
                        </button>
                    </AuthForm>
                )}

                <p className="text-sm text-center text-[#A6C8FF] mt-4">
                    Don't have an account?{' '}
                    <NavLink to="/signup" className="underline hover:text-[#89b3ff] transition-colors duration-150">
                        Sign up
                    </NavLink>
                </p>
            </>
        </AuthContainer>
    );
}
