import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    username: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required]
  })

  isSuccessful = false;

  constructor( private fb: FormBuilder,  private authService: AuthService) {}

  ngOnInit(): void {}

  public error!: string;

  public submit() {
    if (this.form.valid) {
      this.authService.register(this.form.getRawValue()).subscribe({
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
