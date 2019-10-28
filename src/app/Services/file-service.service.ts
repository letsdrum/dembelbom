import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Photo } from '../../Models/photo';

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  photos: Observable<Photo[]>;

  constructor(private afs: AngularFirestore) { }

  getPhotos() : Observable<any>
  {
     return this.afs.collection('files').valueChanges()
  }

}
