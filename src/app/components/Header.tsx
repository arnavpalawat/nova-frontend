import React from "react";
import CategoryButton from "@/app/components/EventSelector";
import Logo from "./Logo";

interface HeaderProps {
    event?: string;
}

const Header: React.FC<HeaderProps> = ({ event }) => {
    return (
        <div className="relative flex items-center w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-700/30 px-5 py-4">
            <div className="flex-1">
                <CategoryButton event={event} />
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
