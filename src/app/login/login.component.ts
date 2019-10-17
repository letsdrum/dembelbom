import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(){
    if (this.auth.isLoggedIn){
      this.router.navigate(["/home"])
    }
  }

  isActive = false;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  signin(email, password) {
    this.auth.login(email, password);
  }
}
