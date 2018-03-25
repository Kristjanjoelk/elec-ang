import { Component, OnInit, OnChanges, Input} from '@angular/core';
import { Member } from '../member.interface';


@Component({
    selector: 'app-chat-member',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.scss']
})

export class MemberComponent implements OnInit {
    @Input()
    member: Member;

    constructor() {
        
    }

    ngOnInit() {
        console.log('hi from member', this.member);
    }

}
