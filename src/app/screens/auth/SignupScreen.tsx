import React, { JSX, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthInput from "@/app/components/auth/AuthInput";
import AuthForm from "@/app/components/auth/AuthForm";
import AuthContainer from "@/app/components/auth/AuthContainer";
import LoadingSpinner from "@/app/components/ui/LoadingSpinner";
import { useUserAuth } from "@/app/contexts/AuthContext";
import {createUser} from "@/app/ApiService";

export default function SignupScreen(): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState(''); // New state for name
    const [event, setEvent] = useState(''); // New state for role
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (!event) {
            setError('Please select a role');
            return;
        }

        try {
            setError('');
            setIsLoading(true);

            await signUp(email, password).then(async (userCredential) => {
                await createUser(userCredential.user.uid, name, event);
            });

            navigate('/login');
        } catch (err: any) {
            setError(err.message || 'Failed to sign up.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthContainer>
            <>
                <h2 className="text-2xl font-bold mb-6 text-center text-[#FFF]">Sign Up</h2>
                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

                {isLoading ? (
                    <div className="flex justify-center py-8">
                        <LoadingSpinner size="md" text="Creating your account..." className="h-32" />
                    </div>
                ) : (
                    <AuthForm onSubmit={handleSubmit}>
                        <AuthInput
                            label="Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                            required
                        />
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

                        {/* Event Dropdown */}
                        <div className="mb-4">
                            <label htmlFor="event" className="block text-sm font-medium text-[#A6C8FF] mb-1">
                                Event
                            </label>
                            <select
                                id="Event"
                                value={event}
                                onChange={(e) => setEvent(e.target.value)}
                                className="w-full px-4 py-2 bg-[#2F3438] border border-[#3C4247] rounded-lg shadow-sm focus:border-[#A6C8FF] focus:ring focus:ring-[#A6C8FF] focus:ring-opacity-50 text-[#FFF] placeholder-[#8d8f93] appearance-none"
                                required
                            >
                                <option value="" disabled>Select your Event</option>
                                <option value="Business Administration Core">Business Administration Core</option>
                                <option value="Business Management and Administration">Business Management and Administration</option>
                                <option value="Entrepreneurship">Entrepreneurship</option>
                                <option value="Finance">Finance</option>
                                <option value="Hospitality and Tourism">Hospitality and Tourism</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Personal Financial Literacy">Personal Financial Literacy</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#A6C8FF] text-[#2F3438] font-medium py-2 px-4 rounded-lg shadow-md hover:bg-[#89b3ff] hover:shadow-lg transition-all duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Creating Account...' : 'Sign Up'}
                        </button>
                    </AuthForm>
                )}

                <p className="text-sm text-center text-[#A6C8FF] mt-4">
                    Already have an account?{' '}
                    <Link to="/login" className="underline hover:text-[#89b3ff] transition-colors duration-150">
                        Log in
                    </Link>
                </p>
            </>
        </AuthContainer>
    );
}