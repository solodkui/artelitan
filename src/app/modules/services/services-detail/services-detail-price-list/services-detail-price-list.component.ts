import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ServicesDetailItem } from 'src/app/interfaces/services.types';

@Component({
  selector: 'app-services-detail-price-list',
  templateUrl: './services-detail-price-list.component.html',
  host: { class: 'c-services-detail-price-list' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesDetailPriceListComponent {
  @Input() services: Array<ServicesDetailItem> = []
}
