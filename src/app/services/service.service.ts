import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import Service from '../models/Service';

@Injectable({ providedIn: 'root' })
export class ServiceService {
  private tempUrls = new Set<string>();
  private placeholder = 'assets/images/placeholder.png';

  services: Service[];

  constructor() {
this.services = [
  {
    id: uuidv4(),
    name: 'Consultoría Cloud',
    code: 'SRV-001',
    price: 140,
    stock: 10,
    isPromotional: true,
    status: true, 
    image: 'assets/images/imagen1.png',
    description: 'Asesoría integral...',
  },
  {
    id: uuidv4(),
    name: 'Auditoría de seguridad',
    code: 'SRV-002',
    price: 840,
    stock: 10,
    isPromotional: true,
    status: false,
    image: 'assets/images/imagen2.png',
    description: 'Evaluamos de forma integral...',
  },
  {
    id: uuidv4(),
    name: 'Desarrollo WEB',
    code: 'SRV-003',
    price: 230,
    stock: 10,
    isPromotional: true,
    status: false,
    image: 'assets/images/imagen3.png',
    description: 'Diseñamos y desarrollamos...',
  },
  {
    id: uuidv4(),
    name: 'Apps Móviles',
    code: 'SRV-004',
    price: 146,
    stock: 10,
    isPromotional: false,
    status: true,
    image: 'assets/images/imagen4.png',
    description: 'Creamos aplicaciones móviles...',
  },
  {
    id: uuidv4(),
    name: 'Analítica de datos',
    code: 'SRV-005',
    price: 350,
    stock: 10,
    isPromotional: true,
    status: true,
    image: 'assets/images/imagen5.png',
    description: 'Transformamos los datos...',
  },
  {
    id: uuidv4(),
    name: 'Diseño UX/UI',
    code: 'SRV-006',
    price: 220,
    stock: 10,
    isPromotional: true,
    status: true,
    image: 'assets/images/imagen6.png',
    description: 'Diseñamos interfaces...',
  },
  {
    id: uuidv4(),
    name: 'Implementación DevOps',
    code: 'SRV-007',
    price: 190,
    stock: 10,
    isPromotional: true,
    status: true,
    image: 'assets/images/imagen7.png',
    description: 'Optimizamos el ciclo...',
  },
  {
    id: uuidv4(),
    name: 'Modelos de IA',
    code: 'SRV-008',
    price: 540,
    stock: 10,
    isPromotional: true,
    status: true,
    image: 'assets/images/imagen8.png',
    description: 'Desarrollamos e implementamos...',
  },
  {
    id: uuidv4(),
    name: 'Soporte IT 24/7',
    code: 'SRV-009',
    price: 840,
    stock: 10,
    isPromotional: true,
    status: true,
    image: 'assets/images/imagen9.png',
    description: 'Brindamos soporte técnico...',
  },
  {
    id: uuidv4(),
    name: 'Blockchain & Smart Sontracts',
    code: 'SRV-010',
    price: 1400,
    stock: 10,
    isPromotional: true,
    status: true,
    image: 'assets/images/imagen10.png',
    description: 'Diseñamos e implementamos...',
  },
];

  }

  getAll(): Service[] {
    return [...this.services];
  }

  getById(id: string): Service | undefined {
    return this.services.find((s) => s.id === id);
  }

  save(
    input: Omit<Service, 'id' | 'code' | 'image'> & {
      image?: string;
      imageFile?: File | null;
    }
  ): Service {
    const image = input.imageFile
      ? this.createTempUrl(input.imageFile)
      : input.image || this.placeholder;

    const newService: Service = {
      ...input,
      image,
      id: uuidv4(),
      code: `SRV-${String(this.services.length + 1).padStart(3, '0')}`,
    } as Service;

    this.services.unshift(newService);
    return newService;
  }

  update(
    id: string,
    patch: Partial<Service> & { imageFile?: File | null }
  ): Service | undefined {
    const idx = this.services.findIndex((s) => s.id === id);
    if (idx === -1) return undefined;

    let nextImage = this.services[idx].image;
    if (patch.imageFile) {
      this.revokeIfTemp(nextImage);
      nextImage = this.createTempUrl(patch.imageFile);
    } else if (typeof patch.image === 'string') {
      this.revokeIfTemp(nextImage);
      nextImage = patch.image;
    }

    const updated = { ...this.services[idx], ...patch, image: nextImage };
    this.services[idx] = updated;
    return updated;
  }

  delete(id: string): boolean {
    const idx = this.services.findIndex((s) => s.id === id);
    if (idx === -1) return false;
    this.revokeIfTemp(this.services[idx].image);
    this.services.splice(idx, 1);
    return true;
  }

  revokeAllTemps(): void {
    for (const u of this.tempUrls) URL.revokeObjectURL(u);
    this.tempUrls.clear();
  }

  private createTempUrl(file: File): string {
    const url = URL.createObjectURL(file);
    this.tempUrls.add(url);
    return url;
  }

  private revokeIfTemp(url: string | undefined): void {
    if (!url) return;
    if (url.startsWith('blob:') && this.tempUrls.has(url)) {
      URL.revokeObjectURL(url);
      this.tempUrls.delete(url);
    }
  }
}
