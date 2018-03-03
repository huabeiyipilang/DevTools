import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TimeConvertComponent } from './modules/timeconvert/time_convert.component';


@NgModule({
  declarations: [
    AppComponent,
    TimeConvertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TimeConvertComponent]
})
export class AppModule { }
