import { Component, OnInit } from '@angular/core';
import { Member } from './member.interface';
import { ChatService } from '../../../services/chat.service';
import { ISubscription } from 'rxjs/Subscription';


@Component({
    selector: 'app-chat-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.scss']
})

export class MembersComponent implements OnInit {
    title: string;
    members: Member[];
    subscription: ISubscription; 
    
      constructor(private chatSer: ChatService) {
        
        this.subscription = this.chatSer.updateMembers.subscribe(
          data => {
            this.members = data;
          },
          err => console.log('error in members sub', err),
          () => console.log('complete')
        );
        this.title = 'This is the member container';
        this.members = [
            new Member({
                name: 'johnson1',
                totalPoints: 1337,
                pointDistribution: { geography: 5, entertainment: 5, history: 5, artsLiterature: 5, scienceNature: 5, sportsLeisure: 5 }
            }),
            // new Member({
            //     name: 'johnson2',
            //     totalPoints: 731,
            //     pointDistribution: { geography: 5, entertainment: 5, history: 5, artsLiterature: 5, scienceNature: 5, sportsLeisure: 5 }
            // }),
            // new Member({
            //     name: 'johnson3',
            //     totalPoints: 123,
            //     pointDistribution: { geography: 5, entertainment: 5, history: 5, artsLiterature: 5, scienceNature: 5, sportsLeisure: 5 }
            // }),
            // new Member({
            //     name: 'johnson4',
            //     totalPoints: 525,
            //     pointDistribution: { geography: 5, entertainment: 5, history: 5, artsLiterature: 5, scienceNature: 5, sportsLeisure: 5 }
            // }),
        ]
    }

    ngOnInit() {
        this.members.sort(function(a, b) {
            return - a.totalPoints + b.totalPoints;
        });
    }

}
