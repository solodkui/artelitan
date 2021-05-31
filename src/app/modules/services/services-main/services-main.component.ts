import { Component, OnInit } from '@angular/core';
import { BreadcrumbsItem } from 'src/app/interfaces/breadcrumbs.types';
import { ServicesMainItem } from 'src/app/interfaces/services.types';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-services-main',
  templateUrl: './services-main.component.html',
  host: { class: 'c-services-main' },
})
export class ServicesMainComponent {
  serviceList: Array<any> = [];
  breadcrumbs: Array<BreadcrumbsItem> = [
    {
      link: '/',
      title: 'services.breadcrumbs.main'
    },
    {
      link: '/services',
      title: 'services.breadcrumbs.services'
    }
  ];
  serviceMainList: Array<ServicesMainItem> = [];

  constructor(private servicesService: ServicesService) {
    this.getServiceMainList();
  }

  getServiceMainList(): void {
    this.serviceMainList = this.servicesService.getServiceMainList();
  }

  // TODO - Need in future
  getServices(): void {
    this.servicesService.getServices().subscribe(response => {
      const list = response.filter(item => !item.rootCategoryId);
      console.log('LIST', list);
      // this.serviceList = list;
      // let custom: any = {};
      // list.forEach(item => {
      //   if (!custom[item.rootCategoryId]) {
      //     custom[item.rootCategoryId] = [];
      //   }
      //   custom[item.rootCategoryId].push(item);
      // });
      // this.serviceList = custom;
      // console.log(custom);
    });
  }
}
