interface RawQuestion {
    answer_explanation: string;
    choices: string[]; // This will now be an array of strings directly
    correct_choice_id: number;
    ia_id: number;
    ia_name: string;
    question: string;
    question_id: number;
}

interface Question {
    question: string;
    answers: string[];
    correctIndex: number;
    rationale: string;
    instructionalArea: {
        id: number;
        name: string;
    };
}
