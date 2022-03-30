import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from "../shared/interfaces/hotel.interface";
import { HotelService } from "../_services/hotel.service";

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentHotel: Hotel = {
    name: '',
    city: '',
    address: '',
    description: '',
  };

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
  }

  getHotel(id: string): void {
    this.hotelService.get(id)
      .subscribe({
        next: (data) => {
          this.currentHotel = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
