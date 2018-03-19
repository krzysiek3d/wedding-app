import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GuestService } from './guest.service';
import { GuestListComponent } from './guest-list/guest-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { GuestDetailsComponent } from './guest-details/guest-details.component';


@NgModule({
  declarations: [
    AppComponent,
    GuestListComponent,
    GuestDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GuestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
