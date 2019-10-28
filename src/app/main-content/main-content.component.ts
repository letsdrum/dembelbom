import { Component, OnInit } from '@angular/core';
import { FileServiceService } from '../Services/file-service.service';
import { Photo } from '../../Models/photo';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  photos: Photo[] = [];
  constructor(public uploadService: FileServiceService) { }

  ngOnInit() {
    this.uploadService.getPhotos().subscribe(
      (photo: Photo[]) => {
        this.photos = photo;
      }
    )
  }

}
