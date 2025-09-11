import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'ts-services-catalog',
  templateUrl: './services-catalog.component.html',
  standalone: true,
  styleUrls: ['./services-catalog.component.css'],
  imports: [HeaderComponent, FooterComponent]
})
export class ServicesCatalogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
