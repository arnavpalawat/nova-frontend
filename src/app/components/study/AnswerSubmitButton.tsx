import React from 'react';

interface AnswerSubmitProps {
    selectedAnswer: string | null;
    correctAnswer: string;
    onSubmit: () => void;
}

const AnswerSubmit: React.FC<AnswerSubmitProps> = ({ selectedAnswer, onSubmit }) => {
    return (
        <div className="w-full">
            <button
                onClick={onSubmit}
                disabled={!selectedAnswer}
                className={`w-full px-6 py-4 rounded-2xl font-medium transition-all duration-200 ease-in-out font-['SF_Pro_Text'] ${
                    selectedAnswer
                        ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] border border-blue-400/30'
                        : 'dark:bg-gray-700/30 bg-gray-300/50 dark:text-gray-500 text-gray-500 cursor-not-allowed dark:border-gray-600/30 border-gray-400/40'
                }`}
            >
                Submit Answer
            </button>
        </div>
    );
};

export default AnswerSubmit;
