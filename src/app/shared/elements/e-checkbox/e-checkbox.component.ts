import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-e-checkbox',
  templateUrl: './e-checkbox.component.html',
  host: { class: 'e-checkbox' },
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class ECheckboxComponent {
  @Input() controlName: string;
  @Input() title: string;
}
