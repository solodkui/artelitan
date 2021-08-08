import { ServicesDetailTypes } from 'src/app/interfaces/services.types';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ServicesService } from '../services.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ServicesDetailResolver implements Resolve<ServicesDetailTypes> {
  constructor(private servicesService: ServicesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ServicesDetailTypes> | ServicesDetailTypes {
    const id: number = +route.paramMap.get('id');
    return this.servicesService.getServiceDetail(id);
  }
}