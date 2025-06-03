import React from 'react';
import {ChevronRight} from "lucide-react";

interface AnswerOptionProps {
    text: string;
    isSelected: boolean;
    onClick: () => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({ text, isSelected, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`rounded-full px-6 py-4 flex items-center justify-between w-[500px] transition ${
                isSelected
                    ? 'bg-[#6b6ba3]'
                    : 'bg-[#1C1C2E] text-[#A6C8FF] hover:bg-[#2a2a3c]'
            }`}
        >
            <span>{text}</span>
            <ChevronRight className="h-8 w-8" />
        </button>
    );
};

export default AnswerOption;
