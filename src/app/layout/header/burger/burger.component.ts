import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  host: { class: 'e-burger' },
})
export class BurgerComponent {
  @Output() changeBurger = new EventEmitter<void>();
  @Input() open: boolean;
}
