import { Component, inject,signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ts-contact',
  standalone:true,
  imports: [ReactiveFormsModule, ProgressBarModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

})
export class ContactComponent {
  private fb: FormBuilder = inject(FormBuilder);
  private toastr: ToastrService = inject(ToastrService);
  public isLoading = signal(false);
  public contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ],
    ],
    message: ['', Validators.required],
    phone:[''],
    subject:['', Validators.required]
  });

  public contactItems = [
    {
      title: 'Correo',
      subtitle: 'soporte@tecnoservicios.com',
      icon: 'envelope'
    },
    {
      title: 'Teléfono',
      subtitle: '+34 910 000 000',
      icon: 'telephone'
    },
    {
      title: 'Horario',
      subtitle: 'Lun-Vie, 9:00-18:00',
      icon: 'clock'
    }
  ];

  public async onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading.set(true);
      try {
        const res: Response = await fetch(
          '/.netlify/functions/formulario-contacto',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.contactForm.value),
          }
        );
        this.isLoading.set(false);
        if (res.ok) {
          this.toastr.success('Correo enviado exitosamente');
          this.contactForm.reset();
        } else {
          this.toastr.error('Error al enviar el correo');
        }
      } catch (error) {
        this.isLoading.set(false);
        this.toastr.error('Ocurrió un error inesperado');
      }
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  onClear() {
    this.contactForm.reset();
  }
}
