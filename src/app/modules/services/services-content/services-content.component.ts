import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { BreadcrumbsItem } from 'src/app/interfaces/breadcrumbs.types';
import { CategoryItem } from 'src/app/interfaces/category-item';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-services-content',
  templateUrl: './services-content.component.html',
  host: { class: 'c-services-content' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesContentComponent implements OnDestroy {
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
  contentList: Array<CategoryItem> = [];
  paramsSubscription: Subscription;
  activeServiceId: number;
  title: string;

  constructor(private route: ActivatedRoute) {
    this.routeParamsSubscription();
    this.contentList = this.route.snapshot.data.services.filter((item) => {
      if (item.id === this.activeServiceId) {
        // Add breadcrumb
        this.breadcrumbs.push({
          link: '/services/content/' + item.id,
          title: item.name,
          customTextMode: true,
        });
        // Set page title
        this.title = item.name;
      }
      return item.rootCategoryId === this.activeServiceId;
    });
  }

  ngOnDestroy(): void {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }

  private routeParamsSubscription(): void {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      this.activeServiceId = +params['id'];
    });
  }
}
