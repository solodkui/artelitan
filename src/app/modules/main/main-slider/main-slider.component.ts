import { Component } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  host: { class: 'c-main-slider' },
})
export class MainSliderComponent {
  swiper: any;
  breakpoints = {
    1024: {
      slidesPerView: 4,
      spaceBetween: 24
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 24,
    }
  };

  onSwiper(swiper: any): void {
    this.swiper = swiper;
  }

  onSlideChange(): void {}

  next(): void {
    this.swiper.slideNext();
  }

  prev(): void {
    this.swiper.slidePrev();
  }
}
