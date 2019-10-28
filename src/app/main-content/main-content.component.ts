import { Component, OnInit } from '@angular/core';
import { FileServiceService } from '../Services/file-service.service';
import { Photo } from '../../Models/photo';
import { MatDialog } from '@angular/material';
import { DialogFullsizePhotoComponent } from './dialog-fullsize-photo/dialog-fullsize-photo.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  photos: Photo[] = [];
  constructor(public uploadService: FileServiceService, public dialog: MatDialog) { }

  ngOnInit() {
    this.uploadService.getPhotos().subscribe(
      (photo: Photo[]) => {
        this.photos = photo;
      }
    )
  }

  openPhoto(url) {
    let photoDialog = this.dialog.open(DialogFullsizePhotoComponent)
    photoDialog.componentInstance.url = url;
  }

}
