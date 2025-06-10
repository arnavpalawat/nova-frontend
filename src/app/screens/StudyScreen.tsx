import React, { useEffect, useState } from 'react';
import QuestionCard from "@/app/components/study/QuestionTile";
import AnswerOption from "@/app/components/study/QuestionAnswerButton";
import AnswerSubmit from "@/app/components/study/AnswerSubmitButton";
import ProgressBar from "@/app/components/ProgressBar";
import Header from "@/app/components/Header";
import BottomNav from "@/app/components/Footer";
import { getExamByName } from "@/app/ApiService"; // import your API function

// Define the shape of the raw data coming from the API
interface RawQuestion {
    answer_explanation: string;
    choices: string[];
    correct_choice_id: number;
    ia_id: number;
    ia_name: string;
    question: string;
    question_id: number;
}

// Define the shape of a processed Question for your component's state
type Question = {
    question: string;
    answers: string[];
    correctIndex: number;
    rationale: string;
    instructionalArea: { // This now matches the object structure
        id: number;
        name: string;
    };
};

const StudyScreen: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                setLoading(true);
                // Assuming getExamByName returns an array of RawQuestion
                const rawData: RawQuestion[] = await getExamByName("Entrepreneurship");

                // Map raw API data to your Question type
                const mappedQuestions: Question[] = rawData.map((q: RawQuestion) => {
                    const answers = q.choices;
                    const correctIndex = 1+ q.correct_choice_id; // This is now 1-based index directly

                    return {
                        question: q.question,
                        answers,
                        correctIndex,
                        rationale: q.answer_explanation,
                        instructionalArea: {
                            id: q.ia_id,
                            name: q.ia_name,
                        },
                    };
                });

                setQuestions(mappedQuestions);
            } catch (err) {
                setError('Failed to load questions.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    if (loading) return <div className="text-center mt-20 text-white">Loading questions...</div>;
    if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;
    if (questions.length === 0) return <div className="text-center mt-20 text-white">No questions available.</div>;

    const currentQuestion = questions[currentIndex];

    const handleSubmit = () => {
        if (selectedAnswer !== null) { // Check for null explicitly
            // Remember correctIndex is 1-based, so subtract 1 for array access
            const isCorrect = selectedAnswer === currentQuestion.answers[currentQuestion.correctIndex - 1];
            if (isCorrect) {
                alert('Correct!');
                // Move to the next question if correct
                if (currentIndex < questions.length - 1) {
                    setCurrentIndex(currentIndex + 1);
                } else {
                    alert('You have completed all questions!');
                }
            } else {
                alert('Wrong!');
                // Add the current question to the end of the list if incorrect
                // This ensures the question is reviewed again later
                // This ensures the question is reviewed again later
                setQuestions((prevQuestions) => [...prevQuestions, currentQuestion]);
            }
            setSelectedAnswer(null); // Clear selected answer for the next question
        } else {
            // Optional: Alert the user if no answer is selected before submitting
            alert("Please select an answer before submitting.");
        }
    };


    return (
        <div className="min-h-screen bg-[#2F3438] w-full flex flex-col text-blue-100">
            <Header />

            <div className="w-full px-5 mb-20">
                <div className="w-3/4 animate__animated animate__fadeInUp duration-25 fast">
                    {/* Progress is now calculated based on the initial number of questions */}
                    <ProgressBar percentage={parseInt(String((0.005 + currentIndex / questions.length) * 100))} />
                </div>
            </div>

            <div className="flex flex-1 justify-around items-start px-20">
                <div className="animate__animated animate__fadeInUp duration-25 fast">
                    <QuestionCard
                        question={currentQuestion.question}
                    />
                </div>

                <div className="flex flex-col items-start px-20 animate__animated animate__fadeInUp duration-25 fast">
                    {/* Access the name property of instructionalArea */}
                    <h1 className="text-3xl font-bold mb-6">{currentQuestion.instructionalArea.name}</h1>
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

                <div className="group perspective w-[300px] h-[200px] relative animate__animated animate__fadeInUp duration-25 fast">
                    <div className="w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute w-full h-full backface-hidden">
                            <QuestionCard question={"Answer Rationale"}  />
                        </div>
                        <div className="absolute w-full h-full rotate-y-180 backface-hidden">
                            <QuestionCard
                                question={currentQuestion.rationale.length > 300 ? (currentQuestion.rationale.substring(0, 300) + "...") : currentQuestion.rationale}

                            />
                        </div>
                    </div>
                </div>
            </div>
            <BottomNav selected={"book"} />
        </div>
    );
};

export default StudyScreen;