import { Component, OnInit } from '@angular/core';
import { ISubscription } from "rxjs/Subscription";
import { socketService } from '../../socketservice/socketservice.js';
import { Message } from '../../services/message';
import { ChatService } from '../../services/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  title: string;
  messages: Message[]
  subscription: ISubscription; 

  constructor(private chatSer: ChatService) {
    
    this.subscription = this.chatSer.update.subscribe(
      data => {
        console.log('Data:', data);
        this.messages = data;
      },
      err => console.log('error in message sub', err),
      () => console.log('complete')
    );
    this.title = 'This is the chat container';
    this.chatSer.test();
    this.messages = [
      new Message('johnson1', 'hey whats up'),
      new Message('johnson2', 'im cool, you?'),
      new Message('johnson3', 'me?')]
  }

  ngOnInit() {
    // var self = this;
    // var test = new socketService();
    // var socket = test.connect();
    // socket.on('connect', () => {
    //   console.log('hallelujah, connected');
    // });
    // socket.on('message', (msg) => {
    //   console.log('msg', msg);
    //   let newMsg = new Message(msg.sender, msg.message);
    //   self.messages.push(newMsg);
    // });
  }
  
  ngOnDestroy() {
    //prevent memory leak when component destroyed
     this.subscription.unsubscribe();
   }

}
