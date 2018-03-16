import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
 
import { Message } from './message';
 
@Injectable()
export class ChatService {
  messages: Message[] = [];
  update: Subject<Message[]> = new Subject<Message[]>();
 
  constructor() { 
  }
 
  getMessages(): Observable<Message[]> {
    return of(this.messages);
  }

  addMessage(message: Message) {
    console.log(this.messages, message);
    this.messages.push(message);
    this.update.next(this.messages);
  }

  addMessages(_messages: Message[]) {
    for(let i = 0; i < _messages.length; i++) {
      this.messages.push(_messages[i]);
    }
    this.update.next(this.messages);
  }

  test() {
    console.log('TEST TEST FROM CHAT SERVICE');
  }

  clear() {
    this.messages = [];
  }
}