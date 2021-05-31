import { Component, OnInit } from '@angular/core';
import { BreadcrumbsItem } from 'src/app/interfaces/breadcrumbs.types';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  host: { class: 'c-contacts' },
})
export class ContactsComponent implements OnInit {
  breadcrumbs: Array<BreadcrumbsItem> = [
    {
      link: '/',
      title: 'contacts.breadcrumbs.main'
    },
    {
      link: '/contacts',
      title: 'contacts.breadcrumbs.contacts'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
