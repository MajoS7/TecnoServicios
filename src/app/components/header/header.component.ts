import { Component, OnInit } from '@angular/core';
import {MatTabsModule } from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'ts-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.css'],
  imports: [RouterLink, MatTabsModule, MatButtonModule, MatToolbarModule, CommonModule],
})
export class HeaderComponent implements OnInit {
  isLogged = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    // Escuchar los cambios de login/logout
    this.userService.loggedIn$.subscribe(status => {
      this.isLogged = status;
    });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}

