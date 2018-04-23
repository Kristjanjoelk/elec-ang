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
  loggedIn: Boolean = true;
  error: string = '';
  constructor(private loginServ: LoginService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    var self = this;
    this.loginServ.login({ name: this.name, password: this.password }, function(err, res) {
      if(err) {
        this.error = err;
      } 
      else {
        self.loggedIn = true;
        self.loginServ.setLogin(true);
      }
    })
  }

}
