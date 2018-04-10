import { Component, OnInit } from '@angular/core';

import { Guest } from '../guest';
import { GuestService } from '../guest.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.css']
})
export class GuestDetailsComponent implements OnInit {

  constructor(
    private guestService: GuestService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  guest: Guest;

  getGuest(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.guestService.getGuest(id)
      .subscribe(guest => this.guest = guest);
  }

  saveGuest(guest: Guest): void {
    this.guestService.updateGuest(guest)
        .subscribe( () => { this.location.back(); } );
  }

  ngOnInit() {
    this.getGuest();
  }

}
