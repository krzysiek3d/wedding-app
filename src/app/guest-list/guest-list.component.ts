import { Component, OnInit } from '@angular/core';

import { Guest } from '../guest';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {

  constructor(private guestService: GuestService) { }

  guests: Guest[];

  getGuests(): void {
    this.guestService.getGuests()
      .subscribe(list => this.guests = list);
  }

  deleteGuest(guest: Guest): void {
    this.guests = this.guests.filter(g => g !== guest);
    this.guestService.deleteGuest(guest).subscribe();
  }

  addGuest(name: string, surname: string): void {
      if (!name || !surname) return;
      this.guestService.addGuest({ name, surname } as Guest)
          .subscribe((guest) => {
             this.guests.push(guest);
          });
  }

  ngOnInit() {
    this.getGuests();
  }

}
