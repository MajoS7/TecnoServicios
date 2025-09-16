import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import Service from '../../models/Service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ts-service-details',
  templateUrl: './service-details.component.html',
  standalone: true,
  styleUrls: ['./service-details.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ServiceDetailsComponent implements OnInit {

  service?: Service;
  quantity = 1;

  constructor(private route: ActivatedRoute, private serviceDetail: ServiceService) {

  }

  ngOnInit() {
    const id = this.route.snapshot.params['id']
    this.service = this.serviceDetail.getById(id);
  }
  

}
