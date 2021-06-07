import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { DataComponent } from './data/data.component';
import { ImageComponent } from './image/image.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {HttpClientModule} from '@angular/common/http';
import { SendDataComponent } from './send-data/send-data.component';
@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ImageComponent,
    LoginComponent,
    RegistrationComponent,
    SendDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
