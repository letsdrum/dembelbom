import { Component, OnInit } from '@angular/core';
import { DialogSettingsComponent } from './dialog-settings/dialog-settings.component';
import { MatDialog } from '@angular/material';

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

}
