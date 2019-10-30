import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-dialog-settings',
  templateUrl: './dialog-settings.component.html',
  styleUrls: ['./dialog-settings.component.scss']
})
export class DialogSettingsComponent implements OnInit {
  hide = true;

  constructor(public auth: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit() { }

  updatePW(newPW: string) {
    this.auth.user.updatePassword(newPW)
    console.log("Success");
    this.snackBar.open('Password was changed.', 'OK', {
      duration: 2000
    });
  }

  updateDisplayName(dName: string) {
    this.auth.user.updateProfile({
      displayName: dName
    })
    console.log("Success");
    this.snackBar.open('Display name was changed.', 'OK', {
      duration: 2000
    });
  }
}
