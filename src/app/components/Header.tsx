import React from "react";
import CategoryButton from "@/app/components/EventSelector";
import Logo from "./Logo";

const Header: React.FC = () => {
    return (
        <div className="flex items-center justify-between w-full bg-[#2F3438] px-5 py-3">
            {/* Left section (75%) */}
            <div className="w-3/4">
                <CategoryButton />
            </div>

            {/* Logo */}
            <div className="w-1/4 flex justify-end">
                <Logo />
            </div>
        </div>
    );
};

export default Header;
