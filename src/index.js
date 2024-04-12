import { triggerDropdown } from './dropdown-menu';
import './style.scss';
import placeholderImage from './img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg';

triggerDropdown();
content1 = document.getElementById('content1');
const img = new Image();
img.src = placeholderImage;
content1.appendChild(img);
