import { Component, OnInit } from '@angular/core';
import { DialogSettingsComponent } from './dialog-settings/dialog-settings.component';
import { MatDialog } from '@angular/material';
import { DialogUploadComponent } from './dialog-upload/dialog-upload.component';
import { AuthService } from '../Services/auth.service';
import { DialogProfileComponent } from './dialog-profile/dialog-profile.component';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, public auth: AuthService) { }

  ngOnInit() {
  }

  openSettings() {
    this.dialog.open(DialogSettingsComponent);
  }

  openUpload() {
    this.dialog.open(DialogUploadComponent)
  }
  
  openProfile(){
    this.dialog.open(DialogProfileComponent)
  }

  logout(){
    this.auth.logout();
  }

}
