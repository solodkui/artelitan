import { Component, OnInit } from '@angular/core';
import { SortTypes } from 'src/app/interfaces/sort.types';

@Component({
  selector: 'app-c-sort',
  templateUrl: './c-sort.component.html',
  host: { class: 'c-sort' },
})
export class CSortComponent {
  activeType: SortTypes = SortTypes.DATE;
  sortTypes = SortTypes
  showList: boolean = false;

  constructor() {}
}
