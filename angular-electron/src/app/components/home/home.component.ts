import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subscription: ISubscription;
  message: string;
  loggedIn: boolean = false;

  constructor(private loginServ: LoginService) { 
    this.subscription = this.loginServ.updateLogin.subscribe(
      data => {
        console.log('Data:', data);
        this.loggedIn = data;
      },
      err => console.log('error in message sub', err),
      () => console.log('complete')
    );
  }

  ngOnInit() {
  }

}
