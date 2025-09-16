import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Service from '../../models/Service';
import { ServiceService } from '../../services/service.service';
import { CreateServiceComponent } from '../../components/create-service/create-service.component';

@Component({
  selector: 'ts-admin',
  standalone: true,
  imports: [FormsModule, CreateServiceComponent, CurrencyPipe],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  search = '';
  page = 1;
  pageSize = 5;
  data: Service[] = [];
  showCreate = false;
  isCreate = true;
  selectService?: Service;

  constructor(private serviceService: ServiceService) {
    this.data = this.serviceService.getAll();
  }

  get filtered(): Service[] {
    const f = this.search.trim().toLowerCase();
    return f ? this.data.filter(d => JSON.stringify(d).toLowerCase().includes(f)) : this.data.slice();
  }

  get totalPages(): number { return Math.max(1, Math.ceil(this.filtered.length / this.pageSize)); }
  get paginated(): Service[] { const s = (this.page - 1) * this.pageSize; return this.filtered.slice(s, s + this.pageSize); }
  get total(): number { return this.filtered.length; }
  get rangeStart(): number { return this.total ? (this.page - 1) * this.pageSize + 1 : 0; }
  get rangeEnd(): number { return this.total ? Math.min(this.page * this.pageSize, this.total) : 0; }

  prev() { if (this.page > 1) this.page--; }
  next() { if (this.page < this.totalPages) this.page++; }

  onSearch(e: Event) { this.search = (e.target as HTMLInputElement).value; this.page = 1; }

  openModal(create: boolean, selectService?: Service) {
    this.isCreate = create;
    this.selectService = selectService;
    this.showCreate = true;
  }

  remove(row: Service) {
    this.serviceService.delete(row.id!);
    this.data = this.serviceService.getAll();
  }

  onCreateSave(service: Service) {
    const dataService= {
      name: service.name,
      price: service.price,
      stock: service.stock,
      description: service.description,
      image: service.image,
      imageFile: service.imageFile ?? null
    }
    if (this.isCreate) {
      this.serviceService.save(dataService);
    } else if (service.id) {
      this.serviceService.update(service.id, dataService);
    }
    this.selectService=undefined;
    this.data = this.serviceService.getAll();
    this.showCreate = false;
  }
}
