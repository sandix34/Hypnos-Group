import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HotelService} from "../_services/hotel.service";

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    name: [null, Validators.required],
    city: [null, Validators.required],
    address: [null, Validators.required],
    description: [null, Validators.required],
    manager: [null, Validators.required]
  })

  isSuccessful = false;

  constructor(private fb: FormBuilder, private hotelService: HotelService) { }

  ngOnInit(): void {
  }

  public error!: string;

  public submit() {
    if (this.form.valid) {
      this.hotelService.createHotel(this.form.getRawValue()).subscribe({
        next: (data) => {
          console.log(data);
          this.isSuccessful = true;
        },
        error: (err) => {
          this.error = err?.error || 'An error has occurred';
        }
      })
    }
  }
}
