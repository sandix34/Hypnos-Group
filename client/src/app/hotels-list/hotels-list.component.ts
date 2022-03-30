import { Component, OnInit } from '@angular/core';
import { HotelService } from "../_services/hotel.service";
import { Hotel } from "../shared/interfaces/hotel.interface";

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  displayedColumns: string[] = ['name'];

  hotels?: Hotel[];

  currentHotel: Hotel = {
    name: '',
    city: '',
    address: '',
    description: '',
  };
  currentIndex = -1;

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

  setActiveHotel(hotel: Hotel, index: number): void {
    this.currentHotel = hotel;
    this.currentIndex = index;
  }

}
