import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  popularList: Array<any> = [
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
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/250',
      title: 'Маникюр, педикюр, долговременное покрытие от 10 руб, комплексы — от 18 руб. в салоне красоты «Vivien»',
      date: '01.02.20201',
      location: 'г. Минск, Беларусь',
      views: 880
    }
  ];

  constructor(private http: HttpClient) {}

  getPopular(): Array<any> {
    return this.popularList;
  } 
}