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
        }
    };

    const colorSelector = (index: number) => {
        if (index % 3 === 0) return "1d1c2d";
        else if (index % 2 === 0) return "555f89";
        else return "a6c8ff";
    };

    return (
        <div className="min-h-screen bg-[#2F3438] w-full flex flex-col text-blue-100">
            {/* Progress Bar */}
            <div className="w-full px-5 mb-20">
                <div className="w-3/4 animate__animated animate__fadeInUp duration-25 fast">
                    <ProgressBar percentage={72} />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-1 justify-around items-start px-20">
                {/* Question Card */}
                <div className="animate__animated animate__fadeInUp duration-25 fast">
                    <QuestionCard color={colorSelector(0)} question={question} stackSize={3} />
                </div>

                {/* Answer Section */}
                <div className="flex flex-col items-start px-20 animate__animated animate__fadeInUp duration-25 fast">
                    <h1 className="text-3xl font-bold mb-6">Product-Service Management</h1>
                    <div className="flex flex-col gap-4 mb-6 w-full">
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

                {/* Flip Card */}
                <div className="group perspective w-[300px] h-[200px] relative animate__animated animate__fadeInUp duration-25 fast">
                    <div className="w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        {/* Front */}
                        <div className="absolute w-full h-full backface-hidden">
                            <QuestionCard color={colorSelector(0)} question={"Answer Rationale"} stackSize={1} />
                        </div>

                        {/* Back */}
                        <div className="absolute w-full h-full rotate-y-180 backface-hidden">
                            <QuestionCard color={colorSelector(0)} question={"Insert Rationale Here"} stackSize={1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyScreen;
