import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import User from '../../models/User';

@Component({
  selector: 'ts-login',
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule],
})
export class LoginComponent {
  user: User = {
    username: '',
    password: '',
    name: '',
    email: '',
    isEnable: true,
  };

  errorMessage: string = '';

  constructor(private users: UserService, private router: Router) {}

  login() {
    const isValid = this.users.validateUser(this.user);

    if (isValid) {
      this.router.navigate(['/admin']);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
