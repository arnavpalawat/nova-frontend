class Question {
    question: string;
    answers: string[];
    correctIndex: number;
    rationale: string;
    instructionalArea: string;
    choices: string[]

    constructor(
        question: string,
        answers: string[],
        correctIndex: number,
        rationale: string,
        instructionalArea: string,
        choices: string[]
    ) {
        this.question = question;
        this.answers = answers;
        this.correctIndex = correctIndex;
        this.rationale = rationale;
        this.instructionalArea = instructionalArea;
        this.choices = choices;
    }

}