import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  host: { class: 'l-main' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
