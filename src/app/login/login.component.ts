import { Component, OnInit } from '@angular/core';
import {User} from './model/User';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = true;
  constructor(private authService:AuthService) {

   }

  ngOnInit() {
    this.loading = false;
  }

  doLogin(){
    this.authService.login(this.model.username, this.model.pwd);
  }

}
