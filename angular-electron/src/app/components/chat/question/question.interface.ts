export class Question {

    public text: string;
    public answer: string;
    public difficulty: string;
    public category: string;
    public hints: string[];

    constructor (private question: any) {
        this.text = question.question;
        this.answer = question.correct_answer;
        this.difficulty = question.difficulty;
        this.category = question.category;
        this.hints = question.hints;
    }

    
}