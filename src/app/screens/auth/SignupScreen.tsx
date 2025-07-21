import React, { JSX, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthInput from "@/app/components/auth/AuthInput";
import AuthForm from "@/app/components/auth/AuthForm";
import AuthContainer from "@/app/components/auth/AuthContainer";
import { useUserAuth } from "@/app/contexts/AuthContext";
import {createUser} from "@/app/ApiService";

export default function SignupScreen(): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState(''); // New state for name
    const [event, setEvent] = useState(''); // New state for role
    const [error, setError] = useState<string>('');

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

         await signUp(email, password).then(async (userCredential) => {await createUser(userCredential.user.uid, name, event)});


            navigate('/login');
        } catch (err: any) { // Type err as any for now, better to define specific error types
            setError(err.message || 'Failed to sign up.'); // Display a more user-friendly error
            console.error(err); // Log the full error for debugging
        }
    };

    return (
        <AuthContainer>
            <>
                <h2 className="text-2xl font-bold mb-6 text-center text-[#FFF]">Sign Up</h2>
                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
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