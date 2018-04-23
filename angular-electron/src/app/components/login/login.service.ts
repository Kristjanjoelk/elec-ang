import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { ISubscription } from "rxjs/Subscription";
import { ChatService } from '../../services/chat.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Member } from '../chat/members/member.interface';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  


@Injectable()
export class LoginService {
    loginUrl = 'http://localhost:3000/login';
    
    updateLogin: Subject<boolean> = new Subject<boolean>();
    constructor(private chatSer: ChatService, private http: HttpClient) {
    }


    login (loginObject, callback) {
        this.chatSer.login(loginObject, function(err, res) {
            callback(err, res);
        });
        // return this.http.post<Member>(this.loginUrl, loginObject, httpOptions);
    }

    setLogin(bool) {
        this.updateLogin.next(bool);
    }
}