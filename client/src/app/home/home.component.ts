import { Component, OnInit } from '@angular/core';
import { UserService } from "../_services/user.service";
import { HotelService } from "../_services/hotel.service";
import { Hotel } from "../shared/interfaces/hotel.interface";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hotels?: Hotel[];

  currentHotel: Hotel = {
    name: '',
    city: '',
    address: '',
    description: '',
  };

  content?: string;

  constructor(private userService: UserService, private hotelService: HotelService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (err) => {
        this.content = JSON.parse(err.error).message;
      }
    })

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
