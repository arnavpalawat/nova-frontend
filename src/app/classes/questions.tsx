class Question {
    question: string;
    answers: string[];
    correctIndex: number;
    rationale: string;
    instructionalArea: string;

    constructor(
        question: string,
        answers: string[],
        correctIndex: number,
        rationale: string,
        instructionalArea: string
    ) {
        this.question = question;
        this.answers = answers;
        this.correctIndex = correctIndex;
        this.rationale = rationale;
        this.instructionalArea = instructionalArea;
    }

}
