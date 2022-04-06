import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RoomService } from "../_services/room.service";
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    title: [null, Validators.required],
    image: [null, Validators.required],
    price: [null, Validators.required],
    description: [null, Validators.required],
  })

  isSuccessful = false;
  public error!: string;

  constructor(private fb: FormBuilder,  private roomService: RoomService) { }

  ngOnInit(): void {}

  public submit() {
    if (this.form.valid) {
      this.roomService.createRoom(this.form.getRawValue()).subscribe({
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
