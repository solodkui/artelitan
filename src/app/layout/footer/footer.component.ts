import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  host: { class: 'c-footer' },
})
export class FooterComponent {
  date: Date = new Date();

  scrollTop(): void {
    window.scrollTo(0, 0);
  }
}
