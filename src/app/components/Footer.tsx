'use client';
import { useState } from 'react';
import { Home, Book, Settings } from 'lucide-react';

type Tab = 'home' | 'book' | 'settings';

interface BottomNavProps {
    selected: Tab;
    setSelected: (tab: Tab) => void;
}

const BottomNav = ({ selected, setSelected }: BottomNavProps) => {
    return (
        <div className="fixed bottom-0 w-full flex justify-center bg-[#2F3438]">
            <div
                className="relative w-[100%] h-32 bg-[#1C1C2E] overflow-hidden shadow-lg"
                style={{
                    clipPath: 'ellipse(100% 100% at 50% 100%)',
                }}
            >
                <div className="absolute inset-0 flex justify-around items-center px-8">
                    <button
                        onClick={() => setSelected('home')}
                        className={`${
                            selected === 'home' ? 'bg-[#5c5d8c]' : ''
                        } p-4 rounded-full transition-colors duration-300`}
                    >
                        <Home className="text-white w-10 h-10" />
                    </button>

                    <button
                        onClick={() => setSelected('book')}
                        className={`${
                            selected === 'book' ? 'bg-[#5c5d8c]' : ''
                        } p-4 rounded-full transition-colors duration-300`}
                    >
                        <Book className="text-white w-10 h-10" />
                    </button>

                    <button
                        onClick={() => setSelected('settings')}
                        className={`${
                            selected === 'settings' ? 'bg-[#5c5d8c]' : ''
                        } p-4 rounded-full transition-colors duration-300`}
                    >
                        <Settings className="text-white w-10 h-10" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BottomNav;
export type { Tab };
