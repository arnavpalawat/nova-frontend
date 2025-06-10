import React from 'react';
import { ChevronRight } from "lucide-react";

interface AnswerOptionProps {
    text: string;
    isSelected: boolean;
    isCorrect?: boolean;
    isWrong?: boolean;
    onClick: () => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
                                                       text,
                                                       isSelected,
                                                       isCorrect,
                                                       isWrong,
                                                       onClick
                                                   }) => {
    let baseStyle = "rounded-full px-6 py-4 flex items-center justify-between w-[500px] transition font-medium ";

    if (isCorrect) {
        baseStyle += "bg-green-500 text-white";
    } else if (isWrong) {
        baseStyle += "bg-red-500 text-white";
    } else if (isSelected) {
        baseStyle += "bg-[#6b6ba3] text-white";
    } else {
        baseStyle += "bg-[#1C1C2E] text-[#A6C8FF] hover:bg-[#2a2a3c]";
    }

    return (
        <button onClick={onClick} className={baseStyle}>
            <span>{text}</span>
            <ChevronRight className="h-8 w-8" />
        </button>
    );
};

export default AnswerOption;
