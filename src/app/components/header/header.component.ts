import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'ts-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.css'],
  imports: [MatTabsModule],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
