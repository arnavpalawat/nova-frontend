import React, { useEffect, useState } from 'react';
import QuestionCard from "@/app/components/study/QuestionTile";
import AnswerOption from "@/app/components/study/QuestionAnswerButton";
import AnswerSubmit from "@/app/components/study/AnswerSubmitButton";
import ProgressBar from "@/app/components/ProgressBar";
import Header from "@/app/components/Header";
import BottomNav from "@/app/components/Footer";
import {getExamByName, updateFlashcards} from "@/app/ApiService";
import { useUserAuth } from "@/app/contexts/AuthContext";
import { useEvent } from "@/app/contexts/EventContext";

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
        <div className="animate-spin rounded-full h-12 w-12 border-4 dark:border-white border-gray-900 border-t-transparent transition-all duration-200" />
    </div>
);

const StudyScreen: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { user } = useUserAuth();
    const { event } = useEvent();
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

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br dark:from-gray-900 dark:to-slate-800 from-gray-100 to-slate-200 flex flex-col w-full overflow-hidden">
                <Header event={event} />
                <div className="flex-1 flex items-center justify-center px-4">
                    <div className="dark:bg-gray-800/30 bg-gray-200/80 backdrop-blur-md rounded-2xl shadow-lg border dark:border-gray-700/30 border-gray-300/50 p-8">
                        <Spinner />
                        <p className="text-center dark:text-white text-gray-900 mt-4 font-['SF_Pro_Text']">Loading questions...</p>
                    </div>
                </div>
                <BottomNav selected="book" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br dark:from-gray-900 dark:to-slate-800 from-gray-100 to-slate-200 flex flex-col w-full overflow-hidden">
                <Header event={event} />
                <div className="flex-1 flex items-center justify-center px-4">
                    <div className="dark:bg-gray-800/30 bg-gray-200/80 backdrop-blur-md rounded-2xl shadow-lg border dark:border-gray-700/30 border-gray-300/50 p-8 text-center">
                        <h2 className="text-xl font-semibold dark:text-white text-gray-900 mb-4 font-['SF_Pro_Text']">Error Loading Questions</h2>
                        <p className="dark:text-gray-300 text-gray-700 font-['SF_Pro_Text']">{error}</p>
                    </div>
                </div>
                <BottomNav selected="book" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br dark:from-gray-900 dark:to-slate-800 from-gray-100 to-slate-200 flex flex-col w-full overflow-hidden">
            <Header event={event} />

            <div className="flex-1 p-4 overflow-hidden">
                {/* Progress Section - Compact Top */}
                <div className="dark:bg-gray-800/30 bg-gray-200/80 backdrop-blur-md rounded-2xl shadow-lg border dark:border-gray-700/30 border-gray-300/50 p-3 mb-4">
                    <ProgressBar percentage={Math.round(((currentIndex + 1) / questions.length) * 100)} />
                </div>

                {/* Main Content - Two Column Layout */}
                {currentQuestion && (
                    <div className="flex gap-6 h-full">
                        {/* Left Column - Question Card (Fixed Size) */}
                        <div className="flex-1 flex flex-col items-center justify-start">
                            <div className={`  w-full max-w-2xl h-96 backdrop-blur-md rounded-2xl shadow-lg border p-8 flex flex-col justify-center transition-all duration-300 ${
                                feedback === 'wrong' 
                                    ? 'bg-red-500/20 border-red-400/50 shadow-red-500/20' 
                                    : feedback === 'correct'
                                    ? 'bg-green-500/20 border-green-400/50 shadow-green-500/20'
                                    : 'dark:bg-gray-800/30 bg-gray-200/80 dark:border-gray-700/30 border-gray-300/50'
                            }`}>
                                <QuestionCard
                                    question={currentQuestion.question}
                                    instructionalArea={currentQuestion.instructionalArea.name}
                                />
                            </div>
                        </div>

                        {/* Right Column - Answer Options */}
                        <div className="flex-1 flex flex-col">
                            <div className="dark:bg-gray-800/30 bg-gray-200/80 backdrop-blur-md rounded-2xl shadow-lg border dark:border-gray-700/30 border-gray-300/50 p-6 flex-1 flex flex-col">
                                <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-4 font-['SF_Pro_Text']">Answer Options</h3>

                                <div className="flex-1 space-y-3 mb-6">
                                    {questions[currentIndex].answers.map((answer, index) => (
                                        <AnswerOption
                                            key={index}
                                            answer={answer}
                                            isSelected={selectedAnswer === answer}
                                            onClick={() => setSelectedAnswer(answer)}
                                            isCorrect={feedback === 'correct' && selectedAnswer === answer}
                                            isWrong={feedback === 'wrong' && selectedAnswer === answer}
                                        />
                                    ))}
                                </div>

                                {/* Explanation Section - Under Answer Options */}
                                {feedback && questions[currentIndex] && (
                                    <div className="mb-6 p-4 dark:bg-gray-700/30 bg-gray-300/50 rounded-2xl border dark:border-gray-600/30 border-gray-400/40 transition-all duration-200">
                                        <p className="dark:text-white text-gray-900 font-medium mb-2 font-['SF_Pro_Text']">Explanation:</p>
                                        <p className="dark:text-gray-300 text-gray-700 font-['SF_Pro_Text']">{questions[currentIndex].rationale}</p>
                                    </div>
                                )}

                                <div className="mt-auto pt-4 border-t dark:border-gray-700/30 border-gray-300/50">
                                    <AnswerSubmit
                                        selectedAnswer={selectedAnswer}
                                        correctAnswer={questions[currentIndex]?.answers[questions[currentIndex]?.correctIndex - 1] || ""}
                                        onSubmit={handleSubmit}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Completion Screen */}
                {isComplete && (
                    <div className="flex items-center justify-center h-full">
                        <div className="dark:bg-gray-800/30 bg-gray-200/80 backdrop-blur-md rounded-2xl shadow-lg border dark:border-gray-700/30 border-gray-300/50 p-8 text-center max-w-md">
                            <div className="mb-6">
                                <div className="text-6xl mb-4">🎉</div>
                                <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-2 font-['SF_Pro_Text']">Study Session Complete!</h2>
                                <p className="dark:text-gray-300 text-gray-700 font-['SF_Pro_Text']">Great job! You've completed all the questions in this session.</p>
                            </div>
                            <button
                                onClick={() => window.location.reload()}
                                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl transition-all duration-200 font-medium font-['SF_Pro_Text'] shadow-lg hover:shadow-xl hover:scale-[1.02]"
                            >
                                Start New Session
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <BottomNav selected="book" />
        </div>
    );
};

export default StudyScreen;
