import React from 'react';
import { ChevronRight } from "lucide-react";

interface AnswerOptionProps {
    answer: string;
    isSelected: boolean;
    isCorrect?: boolean;
    isWrong?: boolean;
    showFeedback?: boolean;
    onClick: () => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
    answer,
    isSelected,
    isCorrect,
    isWrong,
    showFeedback,
    onClick
}) => {
    const getButtonStyles = () => {
        let styles = "rounded-2xl px-6 py-4 flex items-center justify-between w-full transition-all duration-200 ease-in-out font-medium border font-['SF_Pro_Text'] ";

        if (showFeedback) {
            if (isCorrect) {
                styles += "bg-green-500 text-white border-green-400/30 shadow-lg";
            } else if (isWrong) {
                styles += "bg-red-500 text-white border-red-400/30 shadow-lg";
            } else {
                styles += "dark:bg-gray-700/50 bg-gray-300/70 dark:text-gray-300 text-gray-700 dark:border-gray-600/30 border-gray-400/40";
            }
        } else {
            if (isSelected) {
                styles += "bg-blue-500 text-white border-blue-400/30 shadow-lg scale-[1.02]";
            } else {
                styles += "dark:bg-gray-700/50 bg-gray-300/70 dark:text-gray-200 text-gray-800 dark:border-gray-600/30 border-gray-400/40 hover:bg-gray-600/50 hover:scale-[1.01]";
            }
        }

        return styles;
    };

    return (
        <button
            className={getButtonStyles()}
            onClick={onClick}
            disabled={showFeedback}
        >
            <span className="text-left flex-1 text-base">{answer}</span>
            <ChevronRight className="h-5 w-5 ml-3 flex-shrink-0" />
        </button>
    );
};

export default AnswerOption;
