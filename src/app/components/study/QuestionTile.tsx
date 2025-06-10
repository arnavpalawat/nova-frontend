import React from 'react';

type QuestionCardProps = {
    question: string;
    color: string; // e.g., 'ff5733'
    stackSize?: number; // Number of cards in the stack (excluding main)
};

const QuestionCard: React.FC<QuestionCardProps> = ({ question, color}) => {

    return (
        <div className="relative w-90 h-150">

            {/* Main Card */}
            <div
                className="absolute w-full h-full rounded-xl flex items-center justify-center p-6 z-10"
                style={{ backgroundColor: `#${color}` }}
            >
                <h2 className="text-2xl font-normal text-blue-200 whitespace-pre-line text-center">
                    {question}
                </h2>
            </div>
        </div>
    );
};

export default QuestionCard;
