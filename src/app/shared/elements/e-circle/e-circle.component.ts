import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-circle',
  templateUrl: './e-circle.component.html',
  host: { class: 'e-circle' },
})
export class ECircleComponent {
  @Input() type: string;
  @Input() blue: boolean = false;
}
