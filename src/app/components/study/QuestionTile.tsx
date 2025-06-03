import React from 'react';

type QuestionCardProps = {
    question: string;
    color: string; // e.g., 'ff5733'
    stackSize?: number; // Number of cards in the stack (excluding main)
};

const QuestionCard: React.FC<QuestionCardProps> = ({ question, color, stackSize = 2 }) => {
    const layers = Array.from({ length: stackSize });

    return (
        <div className="relative w-90 h-150">
            {/* Background Stack Layers */}
            {layers.map((_, i) => (
                <div
                    key={i}
                    className="absolute w-full h-full rounded-xl bg-opacity-30 z-0"
                    style={{
                        top: i * 6,
                        left: i * 6,
                        backgroundColor: `#${color}`,
                        zIndex: i,
                        transform: `scale(${1 - i * 0.03})`,
                        filter: 'blur(1px)',
                    }}
                />
            ))}

            {/* Main Card */}
            <div
                className="absolute w-full h-full rounded-xl flex items-center justify-center p-6 z-10"
                style={{ backgroundColor: `#${color}` }}
            >
                <h2 className="text-2xl font-medium text-blue-200 whitespace-pre-line text-center">
                    {question}
                </h2>
            </div>
        </div>
    );
};

export default QuestionCard;
