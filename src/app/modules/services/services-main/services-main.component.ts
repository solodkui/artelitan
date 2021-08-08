import { BreadcrumbsItem } from 'src/app/interfaces/breadcrumbs.types';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryItem } from 'src/app/interfaces/category-item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-main',
  templateUrl: './services-main.component.html',
  host: { class: 'c-services-main' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesMainComponent {
  breadcrumbs: Array<BreadcrumbsItem> = [
    {
      link: '/',
      title: 'services.breadcrumbs.main',
    },
    {
      link: '/services',
      title: 'services.breadcrumbs.services',
    },
  ];
  serviceMainList: Array<CategoryItem> = [];
  serviceList: Array<any> = [];

  constructor(private route: ActivatedRoute) {
    if (typeof window !== 'undefined') {
      this.serviceMainList = this.route.snapshot.data.services.filter((item) => !item.rootCategoryId);
    }
  }
}
