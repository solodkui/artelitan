import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CompaniesContentTypes, CompaniesItem } from 'src/app/interfaces/companies.types';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  host: { class: 'c-companies-list' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesListComponent {
  @Input() list: Array<CompaniesItem> = [];
  @Input() type: CompaniesContentTypes;
  companiesContentTypes = CompaniesContentTypes;
}
