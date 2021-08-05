import { ProductItem } from 'src/app/interfaces/products.types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  popularList: Array<ProductItem> = [
    {
      id: 1,
      image: 'https://via.placeholder.com/250',
      title: 'Маникюр, педикюр, долговременное покрытие от 10 руб, комплексы — от 18 руб. в салоне красоты «Vivien»',
      date: '01.02.20201',
      location: 'г. Минск, Беларусь',
      views: 880
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/250',
      title: 'Маникюр, педикюр, долговременное покрытие от 10 руб, комплексы — от 18 руб. в салоне красоты «Vivien»',
      date: '01.02.20201',
      location: 'г. Минск, Беларусь',
      views: 880
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/250',
      title: 'Маникюр, педикюр, долговременное покрытие от 10 руб, комплексы — от 18 руб. в салоне красоты «Vivien»',
      date: '01.02.20201',
      location: 'г. Минск, Беларусь',
      views: 880
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/250',
      title: 'Маникюр, педикюр, долговременное покрытие от 10 руб, комплексы — от 18 руб. в салоне красоты «Vivien»',
      date: '01.02.20201',
      location: 'г. Минск, Беларусь',
      views: 880
    }
  ];

  constructor(private http: HttpClient) {}

  getPopular(size: number = 2, offset: number = 0, filters: Array<number> = []): Array<ProductItem> {
      // TODO --- filters - Edit in future
    return this.popularList;
  } 
}
