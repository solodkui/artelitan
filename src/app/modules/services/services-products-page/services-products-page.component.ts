import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BreadcrumbsItem } from 'src/app/interfaces/breadcrumbs.types';
import { SortTypes } from 'src/app/interfaces/sort.types';

@Component({
  selector: 'app-services-products-page',
  templateUrl: './services-products-page.component.html',
  host: { class: 'c-services-products-page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesProductsPageComponent implements OnDestroy {
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
  paramsSubscription: Subscription;
  activeRootCategoryId: number;
  activeProductId: number;
  sortType = SortTypes;
  title: string;

  constructor(private route: ActivatedRoute) {
    this.routeParamsSubscription();
    this.editBreadcrumbs();
  }

  ngOnDestroy(): void {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }

  editBreadcrumbs(): void {
    if (
      this.route.snapshot.data.services &&
      this.route.snapshot.data.services.length
    ) {
      this.route.snapshot.data.services.forEach((item) => {
        if (item.id === this.activeProductId) {
          // Add breadcrumb
          this.breadcrumbs[3] = {
            link: '/services/content/' + item.id,
            title: item.name,
            customTextMode: true,
          };
          // Set page title
          this.activeRootCategoryId = item.rootCategoryId;
          this.title = item.name;
        }
      });
      // Add breadcrumb
      this.route.snapshot.data.services.map((item) => {
        if (item.id === this.activeRootCategoryId) {
          this.breadcrumbs[2] = {
            link: '/services/content/' + item.id,
            title: item.name,
            customTextMode: true,
          };
        }
      });
    }
  }

  private routeParamsSubscription(): void {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      this.activeProductId = +params['id'];
    });
  }
}
