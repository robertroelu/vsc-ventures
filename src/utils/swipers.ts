import 'swiper/css/bundle';

import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';

export const swipers = () => {
  const swiperModules = [Autoplay, EffectFade];

  const swiperEl = document.querySelector('[swiper-option="founders"]') as HTMLElement;
  if (!swiperEl) return;

  const swiper = new Swiper(swiperEl, {
    speed: 500,
    spaceBetween: 16,
    centeredSlides: true,
    centeredSlidesBounds: true,
    breakpoints: {
      320: {
        slidesPerView: 1.02,
        spaceBetween: 8,
      },
      479: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      767: {
        slidesPerView: 2.1,
      },
    },
  });
};
