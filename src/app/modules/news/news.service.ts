import { NewsItem, NewsItemDetail } from 'src/app/interfaces/news-item';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private newsList: Array<NewsItem> = [
    {
      published: true,
      sourceUrl: '#',
      imageUrl: 'https://via.placeholder.com/250',
      created: '2020-06-10T09:30:37',
      title: 'Шесть российских сериалов, которые выйдут в 2021',
      article: null,
      id: 1,
    },
    {
      published: true,
      sourceUrl: '#',
      imageUrl: 'https://via.placeholder.com/250',
      created: '2020-06-10T09:30:37',
      title: 'Шесть российских сериалов, которые выйдут в 2021',
      article: null,
      id: 2,
    },
    {
      published: true,
      sourceUrl: '#',
      imageUrl: 'https://via.placeholder.com/250',
      created: '2020-06-10T09:30:37',
      title: 'Шесть российских сериалов, которые выйдут в 2021',
      article: null,
      id: 3,
    },
    {
      published: true,
      sourceUrl: '#',
      imageUrl: 'https://via.placeholder.com/250',
      created: '2020-06-10T09:30:37',
      title: 'Шесть российских сериалов, которые выйдут в 2021',
      article: null,
      id: 4,
    },
    {
      published: true,
      sourceUrl: '#',
      imageUrl: 'https://via.placeholder.com/250',
      created: '2020-06-10T09:30:37',
      title: 'Шесть российских сериалов, которые выйдут в 2021',
      article: null,
      id: 5,
    },
    {
      published: true,
      sourceUrl: '#',
      imageUrl: 'https://via.placeholder.com/250',
      created: '2020-06-10T09:30:37',
      title: 'Шесть российских сериалов, которые выйдут в 2021',
      article: null,
      id: 6,
    },
    {
      published: true,
      sourceUrl: '#',
      imageUrl: 'https://via.placeholder.com/250',
      created: '2020-06-10T09:30:37',
      title: 'Шесть российских сериалов, которые выйдут в 2021',
      article: null,
      id: 7,
    },
    {
      published: true,
      sourceUrl: '#',
      imageUrl: 'https://via.placeholder.com/250',
      created: '2020-06-10T09:30:37',
      title: 'Шесть российских сериалов, которые выйдут в 2021',
      article: null,
      id: 8,
    },
    {
      published: true,
      sourceUrl: '#',
      imageUrl: 'https://via.placeholder.com/250',
      created: '2020-06-10T09:30:37',
      title: 'Шесть российских сериалов, которые выйдут в 2021',
      article: null,
      id: 9,
    },
  ];
  private newsItemDetail: NewsItemDetail = {
    imageUrl: 'https://via.placeholder.com/250',
    created: '2020-06-10T09:30:37',
    title: 'Шесть российских сериалов, которые выйдут в 2021',
    article:
      'Каждый год на экраны выходит нескончаемое количество фильмов и сериалов. И пока наш рынок не может похвастаться большими успехами в сериальном производстве, белорусы смотрят другие проекты, в том числе из страны-соседки. Мы расскажем о шести российских сериалах, которые выйдут в 2021 году.',
    id: 1,
    content: [
      {
        description:
          'Смоленск — среднестатистический город, расположенный в средней полосе России. Лишь одно отличает Смоленск от любого другого провинциального города средней полосы — в Смоленске живут вампиры.',
        imageUrl: 'https://via.placeholder.com/250',
        videoUrl:
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        title: 'Вамиры средней полосы',
        params: [
          {
            title: 'Режиссер',
            value: 'Антон Маслов',
          },
          {
            title: 'Жанр',
            value: 'детектив, комедия, фентези',
          },
          {
            title: 'В гланвых ролях',
            value:
              'Юрий Стоянов, Татьяна Догилева, Екатерина Кузнецова, Артем Ткаченко, Ольга Медынич',
          },
        ],
      },
      {
        description:
          'Смоленск — среднестатистический город, расположенный в средней полосе России. Лишь одно отличает Смоленск от любого другого провинциального города средней полосы — в Смоленске живут вампиры.',
        imageUrl: 'https://via.placeholder.com/250',
        videoUrl:
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        title: 'Вамиры средней полосы',
        params: [
          {
            title: 'Режиссер',
            value: 'Антон Маслов',
          },
          {
            title: 'Жанр',
            value: 'детектив, комедия, фентези',
          },
          {
            title: 'В гланвых ролях',
            value:
              'Юрий Стоянов, Татьяна Догилева, Екатерина Кузнецова, Артем Ткаченко, Ольга Медынич',
          },
        ],
      },
    ],
  };

  constructor(private http: HttpClient) {}

  getNews(count: number = 3): Array<NewsItem> {
    // TODO -- Need to re-edit in future
    return this.newsList;
  }

  getNewsById(id: number): NewsItemDetail {
    // TODO -- Need to re-edit in future
    return this.newsItemDetail;
  }
}
