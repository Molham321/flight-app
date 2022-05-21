import { Flight } from './flight';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  find(from:string, to:string): Observable<Flight[]> {
    const url = 'http://demo.ANGULARarchitects.io/api/flight';

    const headers = new HttpHeaders()
    .set('Accept', 'application/json');

    const params = new HttpParams()
    .set('from',from)
    .set('to',to);

    return this.http.get<Flight[]>(url,{headers, params});
  }
}
