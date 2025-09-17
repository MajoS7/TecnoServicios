import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'ts-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, MatTabsModule, MatButtonModule, RouterLink]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
