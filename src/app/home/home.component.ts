import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { RouterModule } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (!this.auth.isLoggedIn){
      this.router.navigate(["/login"])
    }
  }

}
