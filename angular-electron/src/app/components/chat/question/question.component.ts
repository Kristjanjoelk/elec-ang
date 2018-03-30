import { Component, OnInit } from '@angular/core';
import { Question } from './question.interface';
import dummyQuestions from '../../../../assets/fixtures/movies.js';
import { setInterval } from 'core-js/library/web/timers';
import { ISubscription } from "rxjs/Subscription";
import { ChatService } from '../../../services/chat.service';


@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
    subscription: ISubscription; 
    questionList: Question[] = []; 
    counter: number;
    currentQuestion: Question = new Question({});
    currentHint: string;
    hintLevel: number = 0;
    points: number;
    diff: any = {'easy': 3, 'medium': 6, 'hard': 9};
    timeLeft: number = 35;
    constructor(private chatSer: ChatService) {
        this.subscription = this.chatSer.updateQuestions.subscribe(
            data => {
                console.log('Question data recieved');
                console.table(data);
                this.populateQuestions(data);
            },
            err => console.log('error in quetsions sub', err),
            () => console.log('complete')
          );
    }

    ngOnInit() {
        this.chatSer.getQuestions();
    }

 
    getPoints() {
        console.log('getting points', this.questionList);
        this.points = this.diff[this.currentQuestion.difficulty];
    }

    populateQuestions(data: any) {
        this.currentQuestion = data.data;
        this.currentHint = data.hint;
        this.timeLeft = data.timeLeft;
    }   

    // startGame() {
    //     var self = this;
    //     setInterval(function() {
    //         self.timeLeft -= 1;
    //         if(self.timeLeft <= 30 && self.hintLevel === 0) {
    //             self.hintLevel += 1;
    //             self.currentHint = self.currentQuestion.hints[self.hintLevel];
    //         }
    //         if(self.timeLeft <= 15 && self.hintLevel === 1) {
    //             self.hintLevel += 1;
    //             self.currentHint = self.currentQuestion.hints[self.hintLevel];
    //         }
    //         if(self.timeLeft <= 0) {
    //             self.timeLeft = 60;
    //             self.nextQuestion();
    //         }
    //     }, 1 * 1000);
    // }

    // nextQuestion() {
    //     this.hintLevel = 0;
    //     this.currentHint = this.currentQuestion.hints[this.hintLevel];
    //     this.counter = this.counter + 1 < 10 ? this.counter + 1 : 0;
    //     this.currentQuestion = this.questionList[this.counter];
    //     this.getPoints();
    // }



}
