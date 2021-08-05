import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { SortTypes } from 'src/app/interfaces/sort.types';

@Component({
  selector: 'app-c-sort',
  templateUrl: './c-sort.component.html',
  host: { class: 'c-sort' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CSortComponent {
  @Output() changeSort = new EventEmitter<SortTypes>();
  activeType: SortTypes = SortTypes.DATE;
  showList: boolean = false;
  sortTypes = SortTypes;

  constructor() {}

  changeSortType(type: SortTypes): void {
    this.activeType = type;
    this.changeSort.emit(this.activeType);
  }
}
