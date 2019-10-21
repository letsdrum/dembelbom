import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { MatDialog } from '@angular/material';
import { DialogSettingsComponent } from '../dialog-settings/dialog-settings.component';

@Component({
  selector: 'app-dialog-profile',
  templateUrl: './dialog-profile.component.html',
  styleUrls: ['./dialog-profile.component.scss']
})
export class DialogProfileComponent implements OnInit {

  openSettings() {
    this.dialog.open(DialogSettingsComponent)
  }
  constructor(public dialog: MatDialog, public auth: AuthService) { }

  ngOnInit() {
    this.auth.user.photoURL
  }

}
