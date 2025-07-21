// ProgressBar.tsx
import React from "react";

interface ProgressBarProps {
    percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
    const getProgressColor = () => {
        if (percentage < 25) return 'bg-red-500';
        if (percentage < 50) return 'bg-orange-500';
        if (percentage < 75) return 'bg-blue-500';
        if (percentage < 100) return 'bg-green-500';
        return 'bg-emerald-500';
    };

    const getProgressText = () => {
        if (percentage < 25) return 'Getting Started';
        if (percentage < 50) return 'Making Progress';
        if (percentage < 75) return 'Doing Great';
        if (percentage < 100) return 'Almost There';
        return 'Mastered';
    };

    const getProgressIcon = () => {
        if (percentage < 25) return '🌱';
        if (percentage < 50) return '📈';
        if (percentage < 75) return '🔥';
        if (percentage < 100) return '🚀';
        return '🏆';
    };

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                    <span className="text-lg">{getProgressIcon()}</span>
                    <span className="text-sm dark:text-gray-400 text-gray-600 font-['SF_Pro_Text']">{getProgressText()}</span>
                </div>
                <span className="text-sm dark:text-white text-gray-900 font-medium font-['SF_Pro_Text']">{percentage}%</span>
            </div>
            <div className="w-full dark:bg-gray-700/50 bg-gray-300/70 rounded-full h-2 border dark:border-gray-600/30 border-gray-400/40">
                <div
                    className={`h-full rounded-full transition-all duration-500 ${getProgressColor()}`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
