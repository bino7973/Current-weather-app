import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home/home.component";
import {NewsComponent} from "./components/news/news/news.component";
import {LiveCameraComponent} from "./components/liveCamera/live-camera/live-camera.component";
import {PhotosComponent} from "./components/photos/photos/photos.component";
import {ContactComponent} from "./components/contact/contact/contact.component";

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path  : 'news', component : NewsComponent},
  {path : 'liveCameras', component : LiveCameraComponent},
  {path : 'photos', component : PhotosComponent},
  {path : 'contact', component : ContactComponent},
  {path : '', pathMatch : 'full',redirectTo : '/home'},
  {path : '**', redirectTo : '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
