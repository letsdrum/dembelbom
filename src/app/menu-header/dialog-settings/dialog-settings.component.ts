import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-dialog-settings',
  templateUrl: './dialog-settings.component.html',
  styleUrls: ['./dialog-settings.component.scss']
})
export class DialogSettingsComponent implements OnInit {
  hide = true;

  constructor(public auth: AuthService) { }

  ngOnInit() { }

  updatePW(newPW: string) {
    this.auth.user.updatePassword(newPW)
    console.log("Success");
    
  }

  updateDisplayName(dName: string) {
    this.auth.user.updateProfile({
      displayName: dName
    })
  }
}
