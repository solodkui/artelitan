import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisers',
  templateUrl: './advertisers.component.html',
  host: { class: 'c-advertisers' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisersComponent {}
