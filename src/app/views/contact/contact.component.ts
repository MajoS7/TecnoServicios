import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']   // o .scss si usas scss
})
export class ContactComponent implements OnInit {
  contact = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.subject) {
      console.log('Datos enviados:', this.contact);
      alert('Tu mensaje ha sido enviado correctamente ✅');
      // Aquí podrías integrar un servicio HTTP para enviar los datos al backend
    } else {
      alert('Por favor, completa los campos obligatorios ❗');
    }
  }
}
