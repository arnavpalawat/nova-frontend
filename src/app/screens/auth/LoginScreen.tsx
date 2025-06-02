import React from 'react';

export default function LoginScreen() {
    return (
        <div className="justify-items-center align-middle h-screen bg-cover bg-center bg-[url('../assets/images/auth_background.png')]">
            <div className="bg-[#2F3438] p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#FFF]">Login</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-[#FFF]">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 text-[#FFF] bg-transparent border border-gray-500 rounded-xl focus:outline-none"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-[#FFF]">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 text-[#FFF] bg-transparent border border-gray-500 rounded-xl focus:outline-none"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#1C1C2E] text-[#A6C8FF] py-2 rounded-xl transition duration-200"
                    >
                        Sign In
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-[#8d8f93]">
                    Don&#39;t have an account? <a href="#" className="text-[#A6C8FF] hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
}
