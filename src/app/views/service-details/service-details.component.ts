import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import Service from '../../models/Service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ts-service-details',
  templateUrl: './service-details.component.html',
  standalone: true,
  styleUrls: ['./service-details.component.css'],
  imports: [CommonModule, FormsModule, RouterLink]
})
export class ServiceDetailsComponent implements OnInit {

  service?: Service;
  quantity = 1;
  private toastr: ToastrService = inject(ToastrService);

  constructor(private route: ActivatedRoute, private serviceDetail: ServiceService) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id']
    this.service = this.serviceDetail.getById(id);
  }

  showToast() {
    this.toastr.success("Servicio solicitado correctamente.");
  }

}
