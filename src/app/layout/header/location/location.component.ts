import { Component, OnInit } from '@angular/core';
import { LocationItem } from 'src/app/interfaces/locations';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  host: { class: 'e-location' },
})
export class LocationComponent  {
  showList: boolean = false;
  selectedValue: LocationItem;
  locationList: Array<LocationItem> = [
    {
      title: 'location.list.moscow',
      value: 'moscow'
    },
    {
      title: 'location.list.ekaterinburg',
      value: 'ekaterinburg'
    },
    {
      title: 'location.list.voronezh',
      value: 'voronezh'
    }
  ];

  toggleOpenCloseLocationList(): void {
    this.showList = !this.showList;
  }

  selectLocation(data: LocationItem): void {
    this.selectedValue = data;
    this.showList = false;
  }
}
