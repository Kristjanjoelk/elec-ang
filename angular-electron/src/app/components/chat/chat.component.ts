import { Component, OnInit } from '@angular/core';
import { ISubscription } from "rxjs/Subscription";
import { Message } from '../../services/message';
import { ChatService } from '../../services/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: Message[]
  subscription: ISubscription; 

  constructor(private chatSer: ChatService) {
    
    this.subscription = this.chatSer.updateMessages.subscribe(
      data => {
        // console.log('Data:', data);
        this.messages = data;
      },
      err => console.log('error in message sub', err),
      () => console.log('complete')
    );
    // this.messages = [
    //   new Message('johnson1', 'hey whats up'),
    //   new Message('johnson2', 'im cool, you?'),
    //   new Message('johnson3', 'me?')]
  }

  ngOnInit() {
  }
  
  ngOnDestroy() {
     this.subscription.unsubscribe();
   }

}
