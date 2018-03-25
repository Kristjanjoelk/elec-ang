import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string;
  password: string;
  loggedIn: Boolean = false;
  constructor(private loginServ: LoginService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    var self = this;
    this.loginServ.login({ name: this.name, password: this.password })
      .subscribe(res => {
        if(res) {
          self.loggedIn = true;
          self.loginServ.setLogin(true);          
        }
      });
  }

}
