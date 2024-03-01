import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() formData = { name: '', email: '' };
  @Output() formSubmitted: EventEmitter<{ name: string, email: string }> = new EventEmitter<{ name: string, email: string }>();

  submitForm() {
    debugger;
    console.log('Form submitted in child:', this.formData);
    alert('Form submitted in child');
    this.formSubmitted.emit(this.formData);

  }
}
