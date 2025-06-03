import React, { useState } from 'react';
import QuestionCard from "@/app/components/study/QuestionTile";
import AnswerOption from "@/app/components/study/QuestionAnswerButton";
import AnswerSubmit from "@/app/components/study/AnswerSubmitButton";
import ProgressBar from "@/app/components/ProgressBar";

const StudyScreen: React.FC = () => {
    const question = 'What is\nSEO?';
    const answers = ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'];

    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const handleSubmit = () => {
        if (selectedAnswer) {
            alert(`You selected: ${selectedAnswer}`);
            // submit to backend or handle result
        }
    };

    const colorSelector = (index: number) => {
        if (index % 3 === 0) {
            return "1d1c2d";
        } else if (index % 2 === 0) {
            return "555f89";
        } else {
            return "a6c8ff";
        }
    };

    return (
        <div className="min-h-screen bg-[#2F3438] w-full flex flex-col text-blue-100">
            {/* Progress bar at the top */}
            <div className="w-full px-5">
                <div className="w-3/4 animate__animated animate__fadeInUp duration-25 fast">
                    <ProgressBar percentage={72} />

                </div>
            </div>

            {/* Main content area, vertically centered */}
            <div className="flex flex-1 justify-evenly w-full animate__animated animate__fadeInUp duration-5 fast">
                <div className="flex flex-row gap-30 my-10 w-full px-10">
                    {/* Left: Question Card */}
                    <div className="flex-shrink-0">
                        <QuestionCard color={colorSelector(0)} question={question} stackSize={3} />
                    </div>

                    {/* Right: Answer Section */}
                    <div className="flex flex-col justify-start flex-grow">
                        <h1 className="text-3xl font-bold mb-6">Product-Service Management</h1>
                        <div className="flex flex-col gap-4 mb-6">
                            {answers.map((answer, idx) => (
                                <AnswerOption
                                    key={idx}
                                    text={answer}
                                    isSelected={selectedAnswer === answer}
                                    onClick={() => setSelectedAnswer(answer)}
                                />
                            ))}
                        </div>
                        <AnswerSubmit selectedAnswer={selectedAnswer} onSubmit={handleSubmit} />
                    </div>
                    {/* Left: Question Card */}
                    <div className="flex-shrink-0 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <QuestionCard color={colorSelector(0)} question={"Answer Rationale"} stackSize={3} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyScreen;
