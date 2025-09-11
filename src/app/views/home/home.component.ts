import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'ts-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.css'],
  imports: [HeaderComponent, FooterComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
