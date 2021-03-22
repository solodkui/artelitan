import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss'],
  host: { class: 'e-burger' },
})
export class BurgerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
