import { Component, OnInit } from '@angular/core';

interface Member {
    name: string;
}

@Component({
  selector: 'app-chat-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})

export class MembersComponent implements OnInit {
  title: string;
  members: Member[];

  constructor() { 
    this.title = 'This is the member container';
    this.members = [
        {
            'name': 'Johnson1'
        },
        {
            'name': 'Johnson2'
        },
        {
            'name': 'Johnson3'
        },
        {
            'name': 'Johnson4'
        }
    ]
  }

  ngOnInit() {
  }

}
