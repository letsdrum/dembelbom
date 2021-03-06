import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { DialogSettingsComponent } from './menu-header/dialog-settings/dialog-settings.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { DialogUploadComponent } from './menu-header/dialog-upload/dialog-upload.component';
import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './menu-header/uploader/uploader.component';
import { UploadTaskComponent } from './menu-header/upload-task/upload-task.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { DialogProfileComponent } from './menu-header/dialog-profile/dialog-profile.component';
import { DialogFullsizePhotoComponent } from './main-content/dialog-fullsize-photo/dialog-fullsize-photo.component';
import { firebaseConfig } from 'src/env';

const DialogComponents = [
  DialogSettingsComponent,
  DialogUploadComponent,
  DialogProfileComponent,
  DialogFullsizePhotoComponent
];

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MenuHeaderComponent,
    MainContentComponent,
    DialogSettingsComponent,
    LoginComponent,
    HomeComponent,
    DialogUploadComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    DialogProfileComponent,
    DialogFullsizePhotoComponent
  ],
  entryComponents: [DialogComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [  AngularFireStorage, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
