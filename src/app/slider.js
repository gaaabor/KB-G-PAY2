import { tns } from 'tiny-slider';

tns({
  container: '.carousel',
  loop: true,
  items: 1,
  slideBy: 'page',
  autoplay: false,
  speed: 400,
  mouseDrag: true,
  lazyload: true,
});
