import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { GuestListComponent } from './guest-list/guest-list.component';
import { GuestDetailsComponent } from './guest-details/guest-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/goscie', pathMatch: 'full' },
  { path: 'goscie', component: GuestListComponent },
  { path: 'gosc/:id', component: GuestDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
