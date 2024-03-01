import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  formData= {name: '', email: ''}

  submitForm() {
    debugger;
    console.log('Form submitted in parent:', this.formData);
    alert('Form submitted in parent');
  }

  handleFormSubmitted(data: { name: string, email: string }) {
    debugger;
    console.log('Form submitted in child:', data.email + data.name);
    alert('Form submitted in child');
  }
}
