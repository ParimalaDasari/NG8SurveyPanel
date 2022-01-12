import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpInterceptor } from './_services/httpinterceptor';
import { NotificationWithoutButtonsComponent } from './Notifications/notification-without-buttons/notification-without-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationWithoutButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:httpInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
