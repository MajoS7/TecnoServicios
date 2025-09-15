import { Injectable, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import Service from '../models/Service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  services: Service[];

  constructor() { 
    this.services = [
      {
        id: uuidv4(),
        name: "Consultoría Cloud",
        code: "SRV-001",
        price: 140,
        stock: 10,
        isPromotional: true,
        image: "assets/images/imagen1.png", 
        description: "Asesoría integral para migración, optimización y gobierno en la nube. Incluye evaluación de arquitectura, plan de costos, seguridad y mejores prácticas para AWS, Azure o GCP"
      },
      {
        id: uuidv4(),
        name: "Auditoría de seguridad",
        code: "SRV-002",
        stock: 10,
        price: 840,
        isPromotional: true,
        image: "assets/images/imagen2.png",
        description: "Evaluamos de forma integral la infraestructura tecnológica para identificar vulnerabilidades, verificar el cumplimiento de normativas y fortalecer la protección frente a amenazas."
      },
      {
        id: uuidv4(),
        name: "Desarrollo WEB",
        code: "SRV-003",
        stock: 10,
        price: 230,
        isPromotional: true,
        image: "assets/images/imagen3.png",
        description: "Diseñamos y desarrollamos sitios y aplicaciones web a la medida, funcionales, escalables y optimizadas para ofrecer la mejor experiencia al usuario."
      },
      {
        id: uuidv4(),
        name: "Apps Móviles",
        code: "SRV-004",
        stock: 10,
        price: 146,
        isPromotional: true,
        image: "assets/images/imagen4.png",
        description: "Creamos aplicaciones móviles innovadoras y personalizadas, con alto rendimiento y diseño intuitivo, disponibles para Android y iOS."
      },
      {
        id: uuidv4(),
        name: "Analítica de datos",
        code: "SRV-005",
        stock: 10,
        price: 350,
        isPromotional: true,
        image: "assets/images/imagen5.png",
        description: "Transformamos los datos en información valiosa mediante análisis avanzados que impulsan la toma de decisiones estratégicas."
      },
      {
        id: uuidv4(),
        name: "Diseño UX/UI",
        code: "SRV-006",
        stock: 10,
        price: 220,
        isPromotional: true,
        image: "assets/images/imagen6.png",
        description: "Diseñamos interfaces atractivas e intuitivas, centradas en la experiencia del usuario para garantizar usabilidad, accesibilidad y estética."
      },
      {
        id: uuidv4(),
        name: "Implementación DevOps",
        code: "SRV-007",
        stock: 10,
        price: 190,
        isPromotional: true,
        image: "assets/images/imagen7.png",
        description: "Optimizamos el ciclo de vida del software integrando desarrollo y operaciones con prácticas DevOps que aceleran entregas, mejoran la calidad y garantizan despliegues seguros."
      },
      {
        id: uuidv4(),
        name: "Modelos de IA",
        code: "SRV-008",
        stock: 10,
        price: 540,
        isPromotional: true,
        image: "assets/images/imagen8.png",
        description: "Desarrollamos e implementamos modelos de inteligencia artificial que automatizan procesos, generan predicciones precisas y aportan valor innovador a tu negocio."
      },
      {
        id: uuidv4(),
        name: "Soporte IT 24/7",
        code: "SRV-009",
        stock: 10,
        price: 840,
        isPromotional: true,
        image: "assets/images/imagen9.png",
        description: "Brindamos soporte técnico especializado las 24 horas, los 7 días de la semana, asegurando la continuidad y estabilidad de tu infraestructura tecnológica."
      },
      {
        id: uuidv4(),
        name: "Blockchain & Smart Sontracts",
        code: "SRV-010",
        stock: 10,
        price: 1400,
        isPromotional: true,
        image: "assets/images/imagen10.png",
        description: "Diseñamos e implementamos soluciones basadas en blockchain y contratos inteligentes que garantizan transparencia, seguridad y automatización en tus procesos."
      }
    ]
  }

  // Obtener todos los servicios
  getAll(): Service[] {
    return this.services;
  }

  // Obtener un servicio por ID
  getById(id: string): Service | undefined {
    return this.services.find(service => service.id === id);
  }

  // Guardar un nuevo servicio
  save(service: Omit<Service, 'id' | 'code'>): Service {
    const newService: Service = {
      ...service,
      id: uuidv4(),
      code: `SRV-${String(this.services.length + 1).padStart(3, '0')}`
    };
    this.services.push(newService);
    return newService;
  }

  // Actualizar un servicio existente
  update(id: string, updatedData: Partial<Service>): Service | undefined {
    const index = this.services.findIndex(service => service.id === id);
    if (index !== -1) {
      this.services[index] = { ...this.services[index], ...updatedData };
      return this.services[index];
    }
    return undefined;
  }

  // Eliminar un servicio
  delete(id: string): boolean {
    const index = this.services.findIndex(service => service.id === id);
    if (index !== -1) {
      this.services.splice(index, 1);
      return true;
    }
    return false;
  }
}
