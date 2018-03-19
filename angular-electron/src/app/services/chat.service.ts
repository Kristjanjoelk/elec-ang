import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { Socket } from 'ng-socket-io';
import { ISubscription } from "rxjs/Subscription";
 
import { Message } from './message';
 
@Injectable()
export class ChatService {
  messages: Message[] = [];
  update: Subject<Message[]> = new Subject<Message[]>();
  subscription: ISubscription;

  constructor(private socket: Socket) { 
    this.socket
      .on('message', (data, message) => {
        console.log('data from server', data, message);
        this.messages.push(message);
        this.update.next(this.messages);
      });
  }

 
  getMessages(): Observable<Message[]> {
    return of(this.messages);
  }

  addMessage(message: Message) {
    // console.log(this.messages, message);
    // this.messages.push(message);
    // this.update.next(this.messages);
    this.socket.emit('message', message);
  }

  addMessages(_messages: Message[]) {
    for(let i = 0; i < _messages.length; i++) {
      this.messages.push(_messages[i]);
    }
    this.update.next(this.messages);
    this.socket.emit('messages', _messages);
  }

  test() {
    console.log('TEST TEST FROM CHAT SERVICE');
  }

  clear() {
    this.messages = [];
  }

  close() {
    this.socket.disconnect()
  }
}