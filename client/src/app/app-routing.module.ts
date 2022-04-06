import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {BoardAdminComponent} from "./board-admin/board-admin.component";
import {BoardManagerComponent} from "./board-manager/board-manager.component";
import {BoardUserComponent} from "./board-user/board-user.component";
import {AddHotelComponent} from "./add-hotel/add-hotel.component";
import {AddManagerComponent} from "./add-manager/add-manager.component";
import {HotelDetailsComponent} from "./hotel-details/hotel-details.component";
import {AddRoomComponent} from "./add-room/add-room.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: BoardAdminComponent},
  { path: 'admin/add-manager', component: AddManagerComponent },
  { path: 'admin/add-hotel', component: AddHotelComponent },
  { path: 'admin/:id', component: HotelDetailsComponent },
  { path: 'manager', component: BoardManagerComponent },
  { path: 'manager/add-room', component: AddRoomComponent },
  { path: 'user', component: BoardUserComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
