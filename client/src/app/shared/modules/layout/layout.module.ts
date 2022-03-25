import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

const MODULES = [
  CommonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule
]

@NgModule({
  declarations: [],
  imports: MODULES,
  exports : MODULES
})
export class LayoutModule { }
