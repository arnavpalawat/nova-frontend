import React from 'react';

interface AnswerSubmitProps {
    selectedAnswer: string | null;
    onSubmit: () => void;
}

const AnswerSubmit: React.FC<AnswerSubmitProps> = ({ selectedAnswer, onSubmit }) => {
    return (
        <div className="mt-8">
            <button
                onClick={onSubmit}
                disabled={!selectedAnswer}
                className={`px-6 py-3 rounded-lg font-semibold ${
                    selectedAnswer
                        ? 'bg-[#6b6ba3] text-white'
                        : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                }`}
            >
                Submit Answer
            </button>
        </div>
    );
};

export default AnswerSubmit;
