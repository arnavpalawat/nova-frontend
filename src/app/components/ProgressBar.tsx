// ProgressBar.tsx
import React from "react";

interface ProgressBarProps {
    percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
    return (
        <div className="w-full bg-[#232330] rounded-4xl h-9 flex items-center px-2">
            <div
                className="bg-[#A6C8FF] h-6 rounded-full transition-all duration-300"
                style={{ width: `${percentage}%` }}
            />
            <div className="ml-auto text-[#A6C8FF] text-sm pr-3 font-medium">
                {percentage}% Mastered
            </div>
        </div>
    );
};

export default ProgressBar;
