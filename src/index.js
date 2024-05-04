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
  addDotNavigationToSlider,
  addImagesToSlider,
  handleDotNavigation,
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
addImagesToSlider([sliderImg1, sliderImg2, sliderImg3, sliderImg4, sliderImg5]);
addDotNavigationToSlider();
handleDotNavigation();
handleNextAndPreviousButton();
