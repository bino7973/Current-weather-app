import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HomeComponent } from './components/home/home/home.component';
import { NewsComponent } from './components/news/news/news.component';
import { LiveCameraComponent } from './components/liveCamera/live-camera/live-camera.component';
import { PhotosComponent } from './components/photos/photos/photos.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    LiveCameraComponent,
    PhotosComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
