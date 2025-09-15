import { Injectable } from '@angular/core';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
users: User[];

  constructor() {
    this.users = [
      {
        name: "Administrador",
        username: "admin",
        password: "admin1234",
        email: "admin@correo.com",
        isEnable: true
      }
    ]
  }

  // Realizar la funcionalidad
}
