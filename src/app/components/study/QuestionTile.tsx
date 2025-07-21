import React from 'react';

type QuestionCardProps = {
    question: string;
    instructionalArea: string;
};

const QuestionCard: React.FC<QuestionCardProps> = ({ question, instructionalArea }) => {

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            {/* Instructional Area Heading */}
            <div className="mb-6 flex-shrink-0">
                <h3 className="text-sm font-medium dark:text-blue-400 text-blue-600 uppercase tracking-wide text-center font-['SF_Pro_Text']">
                    {instructionalArea}
                </h3>
            </div>

            {/* Question - Scrollable if needed */}
            <div className="flex-1 flex items-center justify-center overflow-y-auto">
                <h2 className="text-2xl font-semibold dark:text-white text-gray-900 text-center leading-relaxed font-['SF_Pro_Text'] px-4">
                    {question}
                </h2>
            </div>
        </div>
    );
};

export default QuestionCard;
