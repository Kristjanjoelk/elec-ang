import { Component, OnInit, OnChanges, Input} from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { Message } from '../../../services/message';

@Component({
  selector: 'app-chat-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  test: string;
  title: string;
  @Input()
  messageValue: string = '';

  constructor(private chatSer: ChatService) { 
    this.title = 'This is the input container';
  }

  ngOnInit() {
  }
  
  onEnter(value: string) { 
    if(!value) {
      return;
    }
    let message = new Message('test', value);
    this.chatSer.addMessage(message); 
    this.messageValue = '';
  }

}
