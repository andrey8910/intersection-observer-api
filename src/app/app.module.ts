import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { ImageLoadingOnScrollComponent } from './components/image-loading-on-scroll/image-loading-on-scroll.component';
import {Routes, RouterModule} from '@angular/router';
import { VideoPlayOnScrollComponent } from './components/video-play-on-scroll/video-play-on-scroll.component';
import { MenuActiveOnScrollComponent } from './components/menu-active-on-scroll/menu-active-on-scroll.component';



const appRoutes: Routes =[

  { path: '', redirectTo: '/img-loading-scroll', pathMatch: 'full' },
  { path: 'img-loading-scroll', component: ImageLoadingOnScrollComponent},
  { path: 'video-play-on-scroll', component: VideoPlayOnScrollComponent},
  { path: 'menu-active-on-scroll', component: MenuActiveOnScrollComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ImageLoadingOnScrollComponent,
    VideoPlayOnScrollComponent,
    MenuActiveOnScrollComponent,

  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
