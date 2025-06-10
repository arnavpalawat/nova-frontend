import React from 'react';

type QuestionCardProps = {
    question: string;
};

const QuestionCard: React.FC<QuestionCardProps> = ({ question}) => {

    return (
        <div className="relative w-90 h-150">

            {/* Main Card */}
            <div
                className="absolute w-full h-full rounded-xl flex items-center justify-center p-6 z-10"
                style={{ backgroundColor: `#1d1c2d` }}
            >
                <h2 className="text-2xl font-normal text-blue-200 whitespace-pre-line text-center">
                    {question}
                </h2>
            </div>
        </div>
    );
};

export default QuestionCard;
