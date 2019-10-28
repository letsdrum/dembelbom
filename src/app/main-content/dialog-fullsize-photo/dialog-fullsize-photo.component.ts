import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dialog-fullsize-photo',
  templateUrl: './dialog-fullsize-photo.component.html',
  styleUrls: ['./dialog-fullsize-photo.component.scss']
})
export class DialogFullsizePhotoComponent implements OnInit {
  @Input() url: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  dialogClose(){
    this.dialog.closeAll();
  }

}
