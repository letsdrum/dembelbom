import { Component, OnInit } from '@angular/core';
import { DialogSettingsComponent } from './dialog-settings/dialog-settings.component';
import { MatDialog } from '@angular/material';
import { DialogUploadComponent } from './dialog-upload/dialog-upload.component';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openSettings() {
    this.dialog.open(DialogSettingsComponent);
  }

  openUpload() {
    this.dialog.open(DialogUploadComponent)
  }

}
