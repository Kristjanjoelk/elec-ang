export class Question {

    public question: string;
    public answer: string;
    public difficulty: string;
    public category: string;
    public hints: string[];
    public cat: string;

    constructor (quest: any) {
        this.question = quest.question;
        this.answer = quest.correct_answer;
        this.difficulty = quest.difficulty;
        this.category = quest.category;
        this.hints = quest.hints;
        this.cat = quest.cat;
    }

    
}