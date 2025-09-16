import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Service from '../../models/Service';


@Component({
  selector: 'ts-create-service',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css'],
})
export class CreateServiceComponent implements OnInit, OnChanges {
  @Input() open = false;
  @Input() isCreate = true;
  @Input() selectService?: Service;

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Service>();

  imagePreview: string | null = null;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [, [Validators.required, Validators.minLength(3)]],
      price: [, [Validators.required, Validators.min(0)]],
      quantity: [, [Validators.required, Validators.min(0)]],
      description: [],
      status: [],
      imageFile: [null as File | null],
    });
  }

  ngOnInit(): void {
    if (this.selectService) this.patchFromService(this.selectService);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectService'] && this.selectService) {
      this.patchFromService(this.selectService);
    }
    if (changes['open'] && !this.open) {
      this.imagePreview = null;
      this.form.patchValue({ imageFile: null });
    }
  }

  private patchFromService(s: Service) {
    this.form.patchValue({
      name: s.name,
      price: s.price,
      quantity: s.stock,
      description: s.description,
      isPromotional: s.isPromotional,
      imageFile: null,
    });
    this.imagePreview = typeof s.image === 'string' ? s.image : null;
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.open) this.close.emit();
  }

  triggerFile(input: HTMLInputElement) { input.click(); }

  onFileChange(e: Event) {
    const f = (e.target as HTMLInputElement).files?.[0] ?? null;
    this.setImage(f);
  }

  onDrop(e: DragEvent) {
    e.preventDefault();
    const f = e.dataTransfer?.files?.[0] ?? null;
    this.setImage(f);
  }

  onDragOver(e: DragEvent) { e.preventDefault(); }

  private setImage(file: File | null) {
    this.form.patchValue({ imageFile: file });
    if (!file) { this.imagePreview = this.selectService?.image ?? null; return; }
    const r = new FileReader();
    r.onload = () => (this.imagePreview = r.result as string);
    r.readAsDataURL(file);
  }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const v = this.form.value;

    const service: Service = {
      id: this.isCreate ? undefined : this.selectService?.id,
      name: v.name,
      price: Number(v.price),
      stock: Number(v.quantity),
      description: v.description ?? '',
      image: this.selectService?.image,  
      imageFile: v.imageFile ?? null,
    };

    this.save.emit(service);
  }
}
