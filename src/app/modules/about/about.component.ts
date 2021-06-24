import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  host: { class: 'c-about' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
