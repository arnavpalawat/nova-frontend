import React from "react";
import CategoryButton from "@/app/components/EventSelector";
import Logo from "./Logo";

interface HeaderProps {
    event?: string; // <-- Adjust this to match the actual event type
}

const Header: React.FC<HeaderProps> = ({ event }) => {
    return (
        <div className="flex items-center justify-between w-full bg-[#2F3438] px-5">
            <div className="w-3/4">
                <CategoryButton event={event} />
            </div>
            <div className="w-1/4 flex justify-end">
                <Logo />
            </div>
        </div>
    );
};

export default Header;
