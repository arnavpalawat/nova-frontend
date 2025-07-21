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
        <div className="fixed bottom-0 w-full flex justify-center bg-[#2F3438]">
            <div
                className="relative w-full h-32 bg-[#1C1C2E] overflow-hidden shadow-lg"
                style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }}
            >
                <div className="absolute inset-0 flex justify-around items-center px-8">
                    <button
                        onClick={() => navigate('/')}
                        className={`p-4 rounded-full ${selected === 'home' ? 'bg-[#6b6ba3]' : ''}`}
                    >
                        <Home className="text-white w-10 h-10" />
                    </button>

                    {hasUID && (
                        <>
                            <button
                                onClick={() => navigate('/study')}
                                className={`p-4 rounded-full ${selected === 'book' ? 'bg-[#6b6ba3]' : ''}`}
                            >
                                <Book className="text-white w-10 h-10" />
                            </button>
                            <button
                                onClick={() => navigate('/settings')}
                                className={`p-4 rounded-full ${selected === 'settings' ? 'bg-[#6b6ba3]' : ''}`}
                            >
                                <Settings className="text-white w-10 h-10" />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BottomNav;
