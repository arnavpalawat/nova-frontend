import React, { JSX, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignupScreen(): JSX.Element {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // Add signup logic here (e.g. API call)
        console.log({ email, password });
    };

    return (
        <div className="min-h-lvh p-0 bg-cover bg-center bg-[url('../assets/images/auth_background.png')] relative">
            <div className="bg-[#2F3438] p-8 rounded-2xl shadow-lg w-full max-w-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate__animated animate__fadeInUp duration-25 fast">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#FFF]">Sign Up</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-[#FFF]">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 text-[#FFF] bg-transparent border border-gray-500 rounded-xl focus:outline-none"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-[#FFF]">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 text-[#FFF] bg-transparent border border-gray-500 rounded-xl focus:outline-none"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-[#FFF]">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 text-[#FFF] bg-transparent border border-gray-500 rounded-xl focus:outline-none"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#1C1C2E] text-[#A6C8FF] py-2 rounded-xl transition duration-200 hover:bg-[#2a2a3c]"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-[#8d8f93]">
                    Already have an account?{' '}
                    <Link to="/login" className="text-[#A6C8FF] hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
