import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {TokenStorageService} from "../../../_services/token-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  showUserBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showManagerBoard = this.roles.includes('ROLE_MANAGER');
      this.showUserBoard = this.roles.includes('ROLE_USER');
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
