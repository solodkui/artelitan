import { ServicesDetailTypes } from 'src/app/interfaces/services.types';
import { CategoryItem } from 'src/app/interfaces/category-item';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  serviceDetail: ServicesDetailTypes = {
    logo: 'https://via.placeholder.com/250',
    stars: 3,
    reviewsCount: 398,
    title:
      'Маникюр, педикюр, долговременное покрытие от 10 руб, комплексы — от 18 руб. в салоне красоты «Vivien»',
    date: '01.03.2021',
    location: 'г. Минск, Беларусь',
    views: 880,
    images: [
      'https://via.placeholder.com/250',
      'https://via.placeholder.com/250',
      'https://via.placeholder.com/250',
      'https://via.placeholder.com/250',
      'https://via.placeholder.com/250',
      'https://via.placeholder.com/250',
      'https://via.placeholder.com/250',
      'https://via.placeholder.com/250',
    ],
    companyInfo: {
      address: 'г. Минск, ул. Шафарнянская, 3',
      commercialName: 'Салон красоты «Марсель»',
      dateRegistration: '2020-09-20T18:53:36.02906',
      description:
        'Экзотические массажи. Горячие ножницы. SPA-процедуры (винное, золотое и др.). Онлайн сертификаты не выходя из дома.',
      email: null,
      id: 3,
      isVerified: false,
      legalName: 'Частное торговое унитарное предприятие «Раптус вектра»',
      logoUrl: null,
      phone: '8 (029) 668-16-97',
      schedule: 'пн.-вс.: 09:00-21:00',
      site: null,
      taxNumber: 'УНП 191636208',
    },
    services: [
      {
        title: 'долговременное покрытие цветным гелем на руках',
        price: 21,
      },
      {
        title:
          'комплекс по уходу за руками (маникюр + пилинг + маска + массаж рук)',
        price: 36,
      },
      {
        title:
          'уход за руками с парафинотерапией (маникюр + пилинг + маска + парафинотерапия рук)',
        price: 44,
      },
    ],
  };

  constructor(private http: HttpClient) {}

  getServices(): Observable<Array<CategoryItem>> {
    return this.http.get<Array<CategoryItem>>(
      `${environment.api}/Category/GetAllCategories`,
      {
        withCredentials: false,
      }
    );
  }

  getServiceDetail(id: number): ServicesDetailTypes {
    return this.serviceDetail;
  }
}
