import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GuestService } from './guest.service';
import { GuestListComponent } from './guest-list/guest-list.component';


@NgModule({
  declarations: [
    AppComponent,
    GuestListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GuestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
