import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  host: { class: 'l-error-page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent {}
