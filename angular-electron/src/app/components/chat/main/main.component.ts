import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../services/message';


@Component({
  selector: 'app-chat-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  title: string;
  @Input()
  messages: Message[];

  constructor() { 
    this.title = 'This is the main container';
  }

  ngOnInit() {
  }

}
