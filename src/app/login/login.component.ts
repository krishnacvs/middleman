import { Component, OnInit } from '@angular/core';
import {User} from './model/User';
import {AuthService} from '../auth.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = true;
  constructor(private authService:AuthService,private router: Router) {

   }

  ngOnInit() {
    this.loading = false;
  }

  doLogin(){
    this.authService.login(this.model.username, this.model.pwd);
    this.router.navigate(['menu'],'');
  }

}
