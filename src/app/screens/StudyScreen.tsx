import React, { useState } from 'react';
import QuestionCard from "@/app/components/study/QuestionTile";
import AnswerOption from "@/app/components/study/QuestionAnswerButton";
import AnswerSubmit from "@/app/components/study/AnswerSubmitButton";
import ProgressBar from "@/app/components/ProgressBar";


const questions: Question[] = [
    {
        question: 'What is\nSEO?',
        answers: ['Search Engine Optimization', 'Social Email Outreach', 'Simple Element Order', 'Site External Operations'],
        correctIndex: 0,
        rationale: 'SEO stands for Search Engine Optimization, which improves site visibility on search engines.',
        instructionalArea: 'IA 1',
    },
    {
        question: 'What does HTML stand for?',
        answers: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Highly Typed Modern Language'],
        correctIndex: 0,
        rationale: 'HTML stands for Hyper Text Markup Language, which structures web content.',
        instructionalArea: 'IA 2',
    },
    {
        question: 'What does HTML stand for?',
        answers: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Highly Typed Modern Language'],
        correctIndex: 0,
        rationale: 'HTML stands for Hyper Text Markup Language, which structures web content.',
        instructionalArea: 'IA 2',
    },{
        question: 'What does HTML stand for?',
        answers: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Highly Typed Modern Language'],
        correctIndex: 0,
        rationale: 'HTML stands for Hyper Text Markup Language, which structures web content.',
        instructionalArea: 'IA 2',
    },{
        question: 'What does HTML stand for?',
        answers: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Highly Typed Modern Language'],
        correctIndex: 0,
        rationale: 'HTML stands for Hyper Text Markup Language, which structures web content.',
        instructionalArea: 'IA 2',
    },];

const StudyScreen: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const currentQuestion = questions[currentIndex];

    const handleSubmit = () => {
        if (selectedAnswer) {
            // You could add feedback logic here (correct/wrong)
            if (currentIndex < questions.length - 1) {
                setCurrentIndex(currentIndex + 1);
                setSelectedAnswer(null);
            } else {
                alert('You have completed all questions!');
            }
        }
    };

    const colorSelector = (index: number) => {
        if (index % 3 === 0) return "1d1c2d";
        else if (index % 2 === 0) return "1d1c2d";
        else return "1d1c2d";
    };

    return (
        <div className="min-h-screen bg-[#2F3438] w-full flex flex-col text-blue-100">
            {/* Progress Bar */}
            <div className="w-full px-5 mb-20">
                <div className="w-3/4 animate__animated animate__fadeInUp duration-25 fast">
                    <ProgressBar percentage={(currentIndex) / questions.length * 100} />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-1 justify-around items-start px-20">
                {/* Question Card */}
                <div className="animate__animated animate__fadeInUp duration-25 fast">
                    <QuestionCard
                        color={colorSelector(currentIndex)}
                        question={currentQuestion.question}
                        stackSize={questions.length - currentIndex}
                    />
                </div>

                {/* Answer Section */}
                <div className="flex flex-col items-start px-20 animate__animated animate__fadeInUp duration-25 fast">
                    <h1 className="text-3xl font-bold mb-6">{currentQuestion.instructionalArea}</h1>
                    <div className="flex flex-col gap-4 mb-6 w-full">
                        {currentQuestion.answers.map((answer, idx) => (
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
                            <QuestionCard color={colorSelector(currentIndex)} question={"Answer Rationale"} stackSize={1} />
                        </div>

                        {/* Back */}
                        <div className="absolute w-full h-full rotate-y-180 backface-hidden">
                            <QuestionCard color={colorSelector(currentIndex)} question={currentQuestion.rationale} stackSize={1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyScreen;
