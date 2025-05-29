// ProgressBar.tsx
import React from "react";

interface ProgressBarProps {
    percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
    return (
        <div className="w-full bg-[#232330] rounded-full h-8 flex items-center px-1">
            <div
                className="bg-[#b3eaf7] h-6 rounded-full transition-all duration-300"
                style={{ width: `${percentage}%` }}
            />
            <div className="ml-auto text-[#b3eaf7] text-sm pr-3 font-medium">
                {percentage}% Mastered
            </div>
        </div>
    );
};

export default ProgressBar;
