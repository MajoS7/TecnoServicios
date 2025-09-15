import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AdminComponent } from './views/admin/admin.component';
import { ContactComponent } from './views/contact/contact.component';
import { LoginComponent } from './views/login/login.component';
import { ServiceDetailsComponent } from './views/service-details/service-details.component';
import { ServicesCatalogComponent } from './views/services-catalog/services-catalog.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'service/:id', component: ServiceDetailsComponent },
  { path: 'servicesCatalog', component: ServicesCatalogComponent }
];
