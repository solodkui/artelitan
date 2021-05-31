import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesMainItem } from 'src/app/interfaces/services.types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  servicesMainList: Array<ServicesMainItem> = [
    {
      title: 'services.main.list.1',
      image: 'assets/images/services/main/1.png',
      link: '/'
    },
    {
      title: 'services.main.list.2',
      image: 'assets/images/services/main/2.png',
      link: '/'
    },
    {
      title: 'services.main.list.3',
      image: 'assets/images/services/main/3.png',
      link: '/'
    },
    {
      title: 'services.main.list.4',
      image: 'assets/images/services/main/4.png',
      link: '/'
    },
    {
      title: 'services.main.list.5',
      image: 'assets/images/services/main/5.png',
      link: '/'
    },
    {
      title: 'services.main.list.6',
      image: 'assets/images/services/main/6.png',
      link: '/'
    },
    {
      title: 'services.main.list.7',
      image: 'assets/images/services/main/7.png',
      link: '/'
    },
    {
      title: 'services.main.list.8',
      image: 'assets/images/services/main/8.png',
      link: '/'
    },
    {
      title: 'services.main.list.9',
      image: 'assets/images/services/main/9.png',
      link: '/'
    },
    {
      title: 'services.main.list.10',
      image: 'assets/images/services/main/10.png',
      link: '/'
    },
    {
      title: 'services.main.list.11',
      image: 'assets/images/services/main/11.png',
      link: '/'
    },
    {
      title: 'services.main.list.12',
      image: 'assets/images/services/main/12.png',
      link: '/'
    },
    {
      title: 'services.main.list.13',
      image: 'assets/images/services/main/13.png',
      link: '/'
    },
    {
      title: 'services.main.list.14',
      image: 'assets/images/services/main/14.png',
      link: '/'
    },
    {
      title: 'services.main.list.15',
      image: 'assets/images/services/main/15.png',
      link: '/'
    },
    {
      title: 'services.main.list.16',
      image: 'assets/images/services/main/16.png',
      link: '/'
    }
  ]

  constructor(private http: HttpClient) {}

  getServiceMainList(): Array<ServicesMainItem> {
    return this.servicesMainList;
  }

  getServices(): Observable<any> {
    return this.http.get(`${environment.api}/Category/GetAllCategories`, {
      withCredentials: false,
    });
  }
}
