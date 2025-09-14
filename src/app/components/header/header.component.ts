import { Component, OnInit } from '@angular/core';
import {MatTabsModule } from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'ts-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.css'],
  imports: [MatTabsModule, MatButtonModule, MatToolbarModule],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
