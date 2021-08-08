import { ServicesDetailTypes } from 'src/app/interfaces/services.types';
import { BreadcrumbsItem } from 'src/app/interfaces/breadcrumbs.types';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-services-detail',
  templateUrl: './services-detail.component.html',
  host: { class: 'c-services-detail' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesDetailComponent {
  breadcrumbs: Array<BreadcrumbsItem> = [
    {
      link: '/',
      title: 'services.breadcrumbs.main',
    },
    {
      link: '',
      title: '...',
      customTextMode: true,
      static: true
    },
  ];
  servicesDetail: ServicesDetailTypes;
  paramsSubscription: Subscription;
  activeRootCategoryId: number;
  activeProductId: number = 82; // TODO -- Demo variable (Need to re-edit in future)
  title: string;

  constructor(private route: ActivatedRoute) {
    this.servicesDetail = this.route.snapshot.data.servicesDetail;
    this.editBreadcrumbs();
  }

  ngOnDestroy(): void {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }

  private editBreadcrumbs(): void {
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

}
