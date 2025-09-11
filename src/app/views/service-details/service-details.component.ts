import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'ts-service-details',
  templateUrl: './service-details.component.html',
  standalone: true,
  styleUrls: ['./service-details.component.css'],
  imports: [HeaderComponent, FooterComponent]
})
export class ServiceDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
