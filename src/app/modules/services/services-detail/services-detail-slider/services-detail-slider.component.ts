import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-services-detail-slider',
  templateUrl: './services-detail-slider.component.html',
  host: { class: 'c-services-detail-slider' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesDetailSliderComponent {
  breakpoints = {
    1024: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
    }
  };
  @Input() images: Array<string> = [];
  swiper: any;

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
