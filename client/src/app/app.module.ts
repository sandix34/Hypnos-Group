import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LayoutModule } from "./shared/modules/layout/layout.module";
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AuthService} from "./_services/auth.service";
import { TokenStorageService } from "./_services/token-storage.service";
import { UserService } from "./_services/user.service";
import { HotelService } from "./_services/hotel.service";
import { RoomService } from "./_services/room.service";

import { AuthInterceptor } from "./_helpers/auth.interceptor";

import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardManagerComponent } from './board-manager/board-manager.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidenavListComponent } from './shared/components/sidenav-list/sidenav-list.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { AddRoomComponent } from './add-room/add-room.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardManagerComponent,
    BoardUserComponent,
    HeaderComponent,
    SidenavListComponent,
    AddHotelComponent,
    AddManagerComponent,
    HotelsListComponent,
    HotelDetailsComponent,
    AddRoomComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        LayoutModule,
        HttpClientModule,
        FlexLayoutModule,
        FormsModule
    ],
  providers: [
    AuthService,
    TokenStorageService,
    UserService,
    HotelService,
    RoomService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide : LocationStrategy , useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
