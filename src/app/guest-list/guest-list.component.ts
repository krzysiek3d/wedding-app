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

  ngOnInit() {
    this.getGuests();
  }

}
