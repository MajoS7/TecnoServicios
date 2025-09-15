import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import Service from '../../models/Service';

@Component({
  selector: 'ts-services-catalog',
  templateUrl: './services-catalog.component.html',
  standalone: true,
  styleUrls: ['./services-catalog.component.css']
})
export class ServicesCatalogComponent implements OnInit {
  services: Service[] = [];
  displayedServices: Service[] = [];
  searchTerm = '';

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.services = this.serviceService.getAll();
    this.displayedServices = [...this.services];
  }

  onSearch(term: string) {
    this.searchTerm = term.trim().toLowerCase();
    if (!this.searchTerm) {
      this.displayedServices = [...this.services];
      return;
    }
    this.displayedServices = this.services.filter(s =>
      (s.name || '').toLowerCase().includes(this.searchTerm)
      || (s.description || '').toLowerCase().includes(this.searchTerm)
      || (s.code || '').toLowerCase().includes(this.searchTerm)
    );
  }

  clearSearch() {
    this.searchTerm = '';
    this.displayedServices = [...this.services];
  }

}
