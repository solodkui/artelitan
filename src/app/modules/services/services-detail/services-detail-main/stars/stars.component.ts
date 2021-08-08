import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  host: { class: 'e-stars' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarsComponent {
  @Input() starCount: number;
}
