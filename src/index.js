import { triggerDropdown } from './dropdown-menu';
import './style.scss';
import placeholderImage from './img/indian-food.jpg';

triggerDropdown();
content = document.getElementById('content');
const img = new Image();
img.src = placeholderImage;
content.appendChild(img);
