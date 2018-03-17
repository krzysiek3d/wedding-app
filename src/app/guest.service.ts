import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Guest } from './guest';
import { GUESTS } from './guests-mock';

@Injectable()
export class GuestService {

  constructor() { }

  getGuests(): Observable<Guest[]> {
    return of(GUESTS);
  }

}
