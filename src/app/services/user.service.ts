import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[];
  private loggedIn = new BehaviorSubject<boolean>(false);

  loggedIn$ = this.loggedIn.asObservable();

  constructor() {
    this.users = [
      {
        name: "Administrador",
        username: "admin",
        password: "admin1234",
        email: "admin@correo.com",
        isEnable: true
      }
    ];
  }

  validateUser(user: User): boolean {
    const foundUser = this.users.find(
      u => u.username === user.username && u.password === user.password
    );

    if (foundUser) {
      this.loggedIn.next(true);
      return true;
    }

    return false;
  }

  logout() {
    this.loggedIn.next(false);
  }

  isLoggedIn(): boolean {
    return this.loggedIn.getValue();
  }
}
