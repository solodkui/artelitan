import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  host: { class: 'e-navigation' },
})
export class NavigationComponent {
  @Output() close = new EventEmitter<void>();
}
