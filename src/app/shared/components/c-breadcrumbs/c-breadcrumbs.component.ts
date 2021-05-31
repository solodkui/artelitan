import { BreadcrumbsItem } from 'src/app/interfaces/breadcrumbs.types';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c-breadcrumbs',
  templateUrl: './c-breadcrumbs.component.html',
  host: { class: 'c-breadcrumbs' },
})
export class CBreadcrumbsComponent {
  @Input() list: Array<BreadcrumbsItem> = [];

  constructor(private router: Router) {}

  redirect(link: string): void {
    this.router.navigate([link]);
  }
}
