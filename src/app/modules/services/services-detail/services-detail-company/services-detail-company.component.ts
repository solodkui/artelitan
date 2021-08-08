import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CompanyTypes } from 'src/app/interfaces/companies.types';

@Component({
  selector: 'app-services-detail-company',
  templateUrl: './services-detail-company.component.html',
  host: { class: 'c-services-detail-company' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesDetailCompanyComponent {
  @Input() companyInfo: CompanyTypes;
}
