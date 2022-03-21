import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    email: [null, Validators.required],
    name: [null, Validators.required],
    password: [null, Validators.required]
  })

  constructor( private fb: FormBuilder ) {}

  ngOnInit(): void {
  }

  public submit() {
    console.log(this.form.getRawValue());
  }

}
