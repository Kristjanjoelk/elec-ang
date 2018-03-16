import { Component, OnInit, OnChanges, Input} from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { Message } from '../../../services/message';

@Component({
  selector: 'app-chat-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input()
  test: string;
  title: string;
  messageValue: string = '';

  constructor(private chatSer: ChatService) { 
    this.title = 'This is the input container';
  }

  ngOnInit() {
  }
  
  onEnter(value: string) { 
    let message = new Message('test', value);
    console.table(message);
    this.chatSer.addMessage(message); 
    this.messageValue = null;
  }

}
