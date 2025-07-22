import React from "react";
import CategoryButton from "@/app/components/EventSelector";
import Logo from "./Logo";
import { useEvent } from "@/app/contexts/EventContext";

interface HeaderProps {
    event?: string;
}

const Header: React.FC<HeaderProps> = ({ event }) => {
    const { loading } = useEvent();

    return (
        <div className="relative flex items-center w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-700/30 px-5 py-4">
            <div className="flex-1">
                {loading ? (
                    <div className="flex items-center gap-3 bg-gray-700/50 px-4 py-3 rounded-2xl border border-gray-600/30">
                        <div className="w-4 h-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        <span className="text-sm font-['SF_Pro_Text'] font-medium text-white">Loading event...</span>
                    </div>
                ) : (
                    <CategoryButton event={event} />
                )}
            </div>

            {/* Centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <Logo />
            </div>

            {/* Empty space for balance */}
            <div className="flex-1"></div>
        </div>
    );
};

export default Header;
