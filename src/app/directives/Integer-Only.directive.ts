import { Directive, ElementRef, HostListener, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[integerOnly]',
  standalone: true,
})
export class IntegerOnlyDirective {
  private nav = new Set(['Backspace','Delete','Tab','ArrowLeft','ArrowRight','Home','End']);

  constructor(private el: ElementRef<HTMLInputElement>,
              @Optional() private ngControl?: NgControl) {}

  @HostListener('keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (this.nav.has(e.key)) return;
    if (!/^\d$/.test(e.key)) e.preventDefault();
  }

  @HostListener('paste', ['$event'])
  onPaste(e: ClipboardEvent) {
    e.preventDefault();
    const add = (e.clipboardData?.getData('text') ?? '').replace(/\D/g, '');
    this.insertText(add);
  }

  @HostListener('input', ['$event'])
  onInput() {
    const cleaned = this.el.nativeElement.value.replace(/\D/g, '');
    if (this.el.nativeElement.value !== cleaned) this.el.nativeElement.value = cleaned;
    this.syncForm(cleaned);
  }

  private insertText(text: string) {
    const el = this.el.nativeElement;
    const start = el.selectionStart ?? el.value.length;
    const end   = el.selectionEnd ?? el.value.length;
    const next  = (el.value.slice(0, start) + text + el.value.slice(end)).replace(/\D/g, '');
    el.value = next;
    const pos = start + text.length;
    el.setSelectionRange(pos, pos);
    this.syncForm(next);
  }

  private syncForm(val: string) {
    this.ngControl?.control?.setValue(val ? parseInt(val, 10) : null, { emitEvent: false });
  }
}
