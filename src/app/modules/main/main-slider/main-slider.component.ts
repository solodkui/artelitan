import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  host: { class: 'c-main-slider' },
})
export class MainSliderComponent {
  swiper: any;

  onSwiper(swiper) {
    console.log(swiper);
    this.swiper = swiper;
    swiper.slideNext();
  }
  onSlideChange() {
    console.log('slide change');
  }

  next(): void {
    this.swiper.slideNext();
  }

  prev(): void {
    this.swiper.slidePrev();
  }
}
