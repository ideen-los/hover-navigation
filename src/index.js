import './style.scss';
import placeholderImage1 from './img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg';
import placeholderImage2 from './img/sourav-ek-pm0O5YpXeAo-unsplash.jpg';
import { triggerDropdown } from './dropdown-menu';

// Desktop dropdown menu
triggerDropdown();
const content1 = document.getElementById('content1');
const img1 = new Image();
img1.src = placeholderImage1;
content1.appendChild(img1);
