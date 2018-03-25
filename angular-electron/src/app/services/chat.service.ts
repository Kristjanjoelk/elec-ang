import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Socket } from 'ng-socket-io';
import { ISubscription } from "rxjs/Subscription";
 
import { Message } from './message';
import { Member } from '../components/chat/members/member.interface';
 
@Injectable()
export class ChatService {
  messages: Message[] = [];
  questions: any[] = [];
  memb: Member = null;
  updateMessages: Subject<Message[]> = new Subject<Message[]>();
  updateMembers: Subject<Member[]> = new Subject<Member[]>();
  updateQuestions: Subject<any[]> = new Subject<any[]>();
  subscription: ISubscription;

  constructor(private socket: Socket) { 
    this.socket
      .on('message', (event, data) => {
        if(event === 'questions') {
          console.log('data asdfasdf questions from server', data);
          this.questions = data.results;
          console.log('after data results', this.questions);
          this.updateQuestions.next(this.questions);
        }
        if(event === 'membersupdate') {
          console.log('newmember from server', data);
          this.updateMembers.next(data);
        } else {
          console.log('data from server', data);
          this.messages.push(data);
          this.updateMessages.next(this.messages);
        }
      });
  }

 
  getMessages(): Observable<Message[]> {
    return of(this.messages);
  }

  getQuestions() {
    this.socket.emit('getQuestions');
  }

  addMessage(message: Message) {
    this.socket.emit('message', message);
  }

  addMessages(_messages: Message[]) {
    for(let i = 0; i < _messages.length; i++) {
      this.messages.push(_messages[i]);
    }
    this.updateMessages.next(this.messages);
    this.socket.emit('messages', _messages);
  }

  login(loginObject) {
    this.socket.emit('login', loginObject);
  }

  clear() {
    this.messages = [];
  }

  close() {
    this.socket.disconnect()
  }
}