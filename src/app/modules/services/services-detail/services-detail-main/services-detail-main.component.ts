import { ServicesDetailTypes } from 'src/app/interfaces/services.types';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-detail-main',
  templateUrl: './services-detail-main.component.html',
  host: { class: 'c-services-detail-main' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesDetailMainComponent {
  @Input() mainInfo: ServicesDetailTypes;
}
