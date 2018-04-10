import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Guest } from './guest';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Contetnt-Type': 'aplication/json' })
};

@Injectable()
export class GuestService {

  private guestsUrl = 'api/goscie';

  constructor(private http: HttpClient) { }

  getGuests(): Observable<Guest[]> {
    return this.http.get<Guest[]>(this.guestsUrl, httpOptions);
  }

  getGuest(id: number): Observable<Guest> {
    return this.http.get<Guest>(`${this.guestsUrl}/${id}`, httpOptions);
  }

  deleteGuest(guest: Guest): Observable<any> {
    return this.http.delete(`${this.guestsUrl}/${guest.id}`);
  }

  addGuest(guest: Guest): Observable<any> {
      return this.http.post(`${this.guestsUrl}`, guest, httpOptions);
  }

  updateGuest(guest: Guest): Observable<Guest> {
    const id = guest.id;
    return this.http.put<Guest>(this.guestsUrl, guest, httpOptions);
  }

}
