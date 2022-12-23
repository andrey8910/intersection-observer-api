import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { ImageLoadingOnScrollComponent } from './components/image-loading-on-scroll/image-loading-on-scroll.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageLoadingOnScrollComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
