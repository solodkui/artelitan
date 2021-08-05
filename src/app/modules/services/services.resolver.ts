import { CategoryItem } from 'src/app/interfaces/category-item';
import { ServicesService } from './services.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ServicesResolver implements Resolve<Array<CategoryItem>> {
  constructor(private servicesService: ServicesService) {}

  resolve(): Observable<Array<CategoryItem>> {
    return this.servicesService.getServices();
  }
}