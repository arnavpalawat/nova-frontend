import React, { useEffect, useState } from 'react';
import QuestionCard from "@/app/components/study/QuestionTile";
import AnswerOption from "@/app/components/study/QuestionAnswerButton";
import AnswerSubmit from "@/app/components/study/AnswerSubmitButton";
import ProgressBar from "@/app/components/ProgressBar";
import Header from "@/app/components/Header";
import BottomNav from "@/app/components/Footer";
import {getExamByName, updateFlashcards} from "@/app/ApiService";
import { useUserAuth } from "@/app/AuthContext";
import { useEvent } from "@/app/components/auth/EventProvider";

// Raw API shape
interface RawQuestion {
    answer_explanation: string;
    choices: string[];
    correct_choice_id: number;
    ia_id: number;
    ia_name: string;
    question: string;
    question_id: number;
}

// Processed shape
type Question = {
    question: string;
    answers: string[];
    correctIndex: number;
    rationale: string;
    instructionalArea: {
        id: number;
        name: string;
    };
};

const Spinner = () => (
    <div className="flex justify-center items-center h-40 w-full">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-white" />
    </div>
);

const StudyScreen: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { user } = useUserAuth();
    const { event } = useEvent(); // Use the event from context
    const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                setLoading(true);
                const rawData: RawQuestion[] = await getExamByName("Entrepreneurship");
                const mappedQuestions: Question[] = rawData.map((q: RawQuestion) => ({
                    question: q.question,
                    answers: q.choices,
                    correctIndex: 1 + q.correct_choice_id,
                    rationale: q.answer_explanation,
                    instructionalArea: {
                        id: q.ia_id,
                        name: q.ia_name,
                    },
                }));
                setQuestions(mappedQuestions);
            } catch (err) {
                setError("Failed to load questions.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchQuestions();
    }, []);

    const currentQuestion = questions[currentIndex];

    const handleSubmit = () => {
        if (selectedAnswer !== null) {
            const isCorrect =
                selectedAnswer === currentQuestion.answers[currentQuestion.correctIndex - 1];

            setFeedback(isCorrect ? 'correct' : 'wrong');

            setTimeout(() => {
                setFeedback(null);
                setSelectedAnswer(null);
                if (isCorrect) {
                    if (currentIndex < questions.length - 1) {
                        setCurrentIndex((prev) => prev + 1);
                    } else {
                        setIsComplete(true);
                    }
                    updateFlashcards(
                        user?.uid ?? "",
                        `${new Date().toLocaleString('en-US', { weekday: 'long' })} | ${new Date().toLocaleString('en-US', { month: 'long' })} | ${new Date().getDate()} | ${new Date().getFullYear()}`
                    )
                } else {
                    setQuestions((prev) => [...prev, currentQuestion]);
                }
            }, 1500);
        }
    };

    if (error)
        return <div className="text-center mt-20 text-red-500">{error}</div>;
    if (questions.length === 0 && !loading)
        return <div className="text-center mt-20 text-white">No questions available.</div>;

    return (
        <div className="min-h-screen bg-[#2F3438] w-full flex flex-col text-blue-100 relative">
            <Header event={event} />

            <div className="w-full px-5 mb-20">
                <div className="w-3/4 animate__animated animate__fadeInUp duration-25 fast">
                    <ProgressBar
                        percentage={parseInt(
                            String((0.005 + currentIndex / questions.length) * 100)
                        )}
                    />
                </div>
            </div>

            <div className="flex flex-1 justify-around items-start px-20">
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        <div className="animate__animated animate__fadeInUp duration-25 fast">
                            <QuestionCard question={currentQuestion.question} />
                        </div>

                        <div className="flex flex-col items-start px-20 animate__animated animate__fadeInUp duration-25 fast">
                            <h1 className="text-3xl font-bold mb-6">
                                {currentQuestion.instructionalArea.name}
                            </h1>
                            <div className="flex flex-col gap-4 mb-6 w-full">
                                {currentQuestion.answers.map((answer, idx) => {
                                    const isCorrect =
                                        feedback === 'correct' &&
                                        answer === currentQuestion.answers[currentQuestion.correctIndex - 1];
                                    const isWrong =
                                        feedback === 'wrong' && selectedAnswer === answer &&
                                        answer !== currentQuestion.answers[currentQuestion.correctIndex - 1];
                                    return (
                                        <AnswerOption
                                            key={idx}
                                            text={answer}
                                            isSelected={selectedAnswer === answer}
                                            isCorrect={isCorrect}
                                            isWrong={isWrong}
                                            onClick={() => setSelectedAnswer(answer)}
                                        />
                                    );
                                })}
                            </div>
                            <AnswerSubmit selectedAnswer={selectedAnswer} onSubmit={handleSubmit} />
                            {feedback && (
                                <div
                                    className={`mt-4 text-xl font-semibold transition-all duration-500 ${
                                        feedback === 'correct' ? 'text-green-400' : 'text-red-400'
                                    }`}
                                >
                                    {feedback === 'correct' ? '✅ Correct!' : '❌ Incorrect!'}
                                </div>
                            )}
                        </div>

                        <div className="group perspective w-[300px] h-[200px] relative animate__animated animate__fadeInUp duration-25 fast">
                            <div className="w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                <div className="absolute w-full h-full backface-hidden">
                                    <QuestionCard question={"Answer Rationale"} />
                                </div>
                                <div className="absolute w-full h-full rotate-y-180 backface-hidden">
                                    <QuestionCard
                                        question={
                                            currentQuestion.rationale.length > 300
                                                ? currentQuestion.rationale.substring(0, 300) + "..."
                                                : currentQuestion.rationale
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <BottomNav selected={"book"} />

            {isComplete && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-white p-10 rounded-xl text-center text-black w-96">
                        <h2 className="text-2xl font-bold mb-4">🎉 Quiz Completed!</h2>
                        <p className="mb-6">Great job! You've completed all the questions.</p>
                        <button
                            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
                            onClick={() => window.location.reload()}
                        >
                            Restart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudyScreen;