import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'ts-login',
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.css'],
  imports: []
})
export class LoginComponent implements OnInit {
  

  constructor(private users: UserService) { }

  ngOnInit() {
  }

}
