import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    user: ''
  };

  message = '';

  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getHotel(this.route.snapshot.params["id"]);
    }
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

  updateHotel(): void {
    this.message = '';
    this.hotelService.update(this.currentHotel._id, this.currentHotel)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This hotel was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteHotel(): void {
    this.hotelService.delete(this.currentHotel._id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/admin']);
        },
        error: (e) => console.error(e)
      });
  }

}
