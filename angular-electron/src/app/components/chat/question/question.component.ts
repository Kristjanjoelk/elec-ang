import { Component, OnInit } from '@angular/core';
import { Question } from './question.interface';
import dummyQuestions from '../../../../assets/fixtures/movies.js';


@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
    questionList: Question[] = []; 
    counter: number;
    currentQuestion: Question;
    hint: string;
    points: number;
    diff: any = {'easy': 3, 'medium': 6, 'hard': 9};
    timeLeft: number = 10;
    constructor() {
        
    }

    ngOnInit() {
        this.counter = 0;
        this.populateQuestions();
        this.currentQuestion = this.questionList[this.counter];
        this.getHintAndPoints();
    }

    getHintAndPoints() {
        this.hint = Array(this.currentQuestion.answer.length).join('*');//this.asteriks.substr(0, this.currentQuestion.answer.length);
        this.points = this.diff[this.currentQuestion.difficulty];
    }

    populateQuestions() {
        console.log(dummyQuestions);
        for(let i = 0; i < dummyQuestions.results.length; i++) {
            this.questionList.push(new Question(dummyQuestions.results[i]));
        }
    }


}
