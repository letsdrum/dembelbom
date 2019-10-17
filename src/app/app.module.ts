import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

const DialogComponents = [
  DialogSettingsComponent,
  DialogUploadComponent
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
    DialogUploadComponent
  ],
  entryComponents: [DialogComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
