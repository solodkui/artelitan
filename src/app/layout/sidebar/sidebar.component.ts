import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsItem } from 'src/app/interfaces/news-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  host: { class: 'c-sidebar' },
})
export class SidebarComponent implements OnInit {
  newsList: Array<NewsItem> = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newsList = this.route.snapshot.data.news;
    console.log(this.newsList)
  }
}
