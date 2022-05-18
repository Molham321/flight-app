import { Flight } from './../flight';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg';
  to = 'Graz';
  flights: Array<Flight> = [];
  selectedFlight: Flight | null = null;

  constructor() { 
  }

  ngOnInit(): void {
  }

  search():void {
    // todo
  }

  select(f:Flight):void {
    this.selectedFlight = f;
  }

}