import { Component, OnInit } from '@angular/core';
import { HotelService } from "../_services/hotel.service";
import {Hotel} from "../shared/interfaces/hotel.interface";

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  hotels?: Hotel[];

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.retrieveHotels();
  }

  retrieveHotels(): void {
    this.hotelService.getAllHotels()
      .subscribe({
        next: (data) => {
          this.hotels = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
