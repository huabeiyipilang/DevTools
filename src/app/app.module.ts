import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { TimeConvertComponent } from './modules/timeconvert/time_convert.component';
import { ColorARGBComponent } from './modules/colorargb/color_argb.component';
import { ColorValueComponent } from './modules/colorargb/color_value.component';


@NgModule({
  declarations: [
    AppComponent,
    TimeConvertComponent,
    ColorARGBComponent,
    ColorValueComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatSliderModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [ColorARGBComponent]
})
export class AppModule { }
