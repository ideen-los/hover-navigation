import './style.scss';
import placeholderImage1 from './img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg';
import placeholderImage2 from './img/sourav-ek-pm0O5YpXeAo-unsplash.jpg';
import sliderImg1 from './img/slider1-sebastiano-corti-a7sDjSU3T3g-unsplash.jpg';
import sliderImg2 from './img/slider2-sebastiano-corti-PzHfa8sG4EY-unsplash.jpg';
import sliderImg3 from './img/slider3-albert-stoynov-TFXl1cILAsc-unsplash.jpg';
import sliderImg4 from './img/slider4-haberdoedas-KsrTeevNung-unsplash.jpg';
import sliderImg5 from './img/slider5-craig-manners-yZW5jml6HNA-unsplash.jpg';
import { triggerDropdown } from './dropdown-menu';
import {
  handleBackButton,
  preventDefaultOnLinks,
  triggerFlyoutMenu,
  triggerMobileDropdown,
} from './mobile-menu';
import {
  addImagesToSlider,
  handleNextAndPreviousButton,
  preloadImages,
  preloadedImages,
} from './image-slider';

// Desktop dropdown menu
triggerDropdown();
const content1 = document.getElementById('content1');
const img1 = new Image();
img1.src = placeholderImage1;
content1.appendChild(img1);

// Mobile hamburger menu
triggerFlyoutMenu();
triggerMobileDropdown();
handleBackButton();
preventDefaultOnLinks();
const content2 = document.getElementById('content2');
const img2 = new Image();
img2.src = placeholderImage2;
content2.appendChild(img2);

// Image slider
/* preloadImages([sliderImg1, sliderImg2, sliderImg3, sliderImg4, sliderImg5]).then(() => {
  addImagesToSlider(preloadedImages);
}); */
const sliderTrack = document.querySelector('.slider-track');
const sliderImage1 = new Image();
sliderImage1.src = sliderImg1;
sliderTrack.appendChild(sliderImage1);
const sliderImage2 = new Image();
sliderImage2.src = sliderImg2;
sliderTrack.appendChild(sliderImage2);
const sliderImage3 = new Image();
sliderImage3.src = sliderImg3;
sliderTrack.appendChild(sliderImage3);
const sliderImage4 = new Image();
sliderImage4.src = sliderImg4;
sliderTrack.appendChild(sliderImage4);
const sliderImage5 = new Image();
sliderImage5.src = sliderImg5;
sliderTrack.appendChild(sliderImage5);

handleNextAndPreviousButton();
