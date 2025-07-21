// BottomNav.tsx
'use client';

import { Home, Book, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useNav } from '@/app/contexts/NavContext';

type Tab = 'home' | 'book' | 'settings';

interface BottomNavProps {
    selected: Tab;
}

const BottomNav = ({ selected }: BottomNavProps) => {
    const navigate = useNavigate();
    const { hasUID } = useNav();

    return (
        <div className="fixed bottom-0 w-full flex justify-center dark:bg-gray-900/98 bg-gray-100/98  backdrop-blur-md border-t dark:border-gray-700/30 border-gray-300/50">
            <div
                className="relative w-full h-32 dark:bg-gray-800/60 bg-gray-200/60 overflow-hidden shadow-lg"
                style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }}
            >
                <div className="absolute inset-0 flex justify-around items-center px-8">
                    <button
                        onClick={() => navigate('/')}
                        className={`p-4 rounded-full transition-all duration-200 ${
                            selected === 'home'
                                ? 'bg-blue-500 scale-110'
                                : 'dark:bg-gray-700/50 bg-gray-300/70 hover:bg-gray-600/50'
                        }`}
                    >
                        <Home className="text-white w-6 h-6" />
                    </button>

                    {hasUID && (
                        <>
                            <button
                                onClick={() => navigate('/study')}
                                className={`p-4 rounded-full transition-all duration-200 ${
                                    selected === 'book'
                                        ? 'bg-blue-500 scale-110'
                                        : 'dark:bg-gray-700/50 bg-gray-300/70 hover:bg-gray-600/50'
                                }`}
                            >
                                <Book className="text-white w-6 h-6" />
                            </button>
                            <button
                                onClick={() => navigate('/settings')}
                                className={`p-4 rounded-full transition-all duration-200 ${
                                    selected === 'settings'
                                        ? 'bg-blue-500 scale-110'
                                        : 'dark:bg-gray-700/50 bg-gray-300/70 hover:bg-gray-600/50'
                                }`}
                            >
                                <Settings className="text-white w-6 h-6" />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BottomNav;
