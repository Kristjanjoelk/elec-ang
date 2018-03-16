import { Component, OnInit } from '@angular/core';
import { socketService } from '../../socketservice/socketservice.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message: string;

  constructor() { 
    this.message = '';
  }

  ngOnInit() {
    var self = this;
    var test = new socketService();
    var socket = test.connect();
    socket.on('connect', () => {
      console.log('hallelujah, connected');
    });
    socket.on('message', (msg) => {
      console.log('msg', msg);
      self.message = msg;
    });
  }

}
