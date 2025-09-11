import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'ts-login',
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.css'],
  imports: [HeaderComponent, FooterComponent]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
