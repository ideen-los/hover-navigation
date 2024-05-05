// Queries any DOM element
const getElement = (element) => {
  return document.querySelector(element);
};

// Creates the dot Container for navigating the slideshow
const createDotContainer = function createDotContainer() {
  const dotContainer = document.createElement('div');
  dotContainer.classList.add('dot-container');
  return dotContainer;
};

// Removes .is.active class from all dots and adds it to a dot with a specific index
const updateDotNavigation = function updateDotNavigation(elements, index) {
  elements.forEach((dot) => {
    dot.classList.remove('is-active');
  });

  elements[index].classList.add('is-active');
};

// Populates the slider with images
export const addImagesToSlider = function addImagesToSlider(urls) {
  const sliderTrack = getElement('.slider-track');

  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
    sliderTrack.appendChild(img);
  });
};

// Adds the dot navigation to the slider
export const addDotNavigationToSlider = function addDotNavigationToSlider() {
  const sliderImages = document.querySelectorAll('.slider-track img');
  const imageSlider = getElement('.image-slider');

  let imageCounter = 0;
  const dotContainer = createDotContainer();

  sliderImages.forEach((img) => {
    const dot = document.createElement('div');
    dot.setAttribute('data-slide', (imageCounter += 1));
    dotContainer.appendChild(dot);
  });

  imageSlider.appendChild(dotContainer);
};

// Handles the dot navigation logic
export const handleDotNavigation = function handleDotNavigation() {
  const dotContainer = getElement('.dot-container');
  const sliderTrack = getElement('.slider-track');

  dotContainer.addEventListener('click', (e) => {
    const sliderTrackWidth = sliderTrack.getBoundingClientRect().width;

    if (e.target.matches('.dot-container div')) {
      const slideNumber = e.target.getAttribute('data-slide');
      const dotNavigationElements = document.querySelectorAll('.dot-container div');

      dotNavigationElements.forEach((dot) => {
        dot.classList.remove('is-active');
      });
      e.target.classList.add('is-active');

      if (slideNumber === 1) {
        sliderTrack.style.transform = 'translateX(0)';
      } else {
        sliderTrack.style.transform = `translateX(-${sliderTrackWidth * (slideNumber - 1)}px)`;
      }
    }
  });
};

class SlideController {
  constructor() {
    this.sliderTrack = getElement('.slider-track');
    this.sliderImages = document.querySelectorAll('.slider-track img');
  }

  getSliderTrackWidth() {
    return this.sliderTrack.getBoundingClientRect().width;
  }

  getCurrentTransformValue() {
    const styles = window.getComputedStyle(this.sliderTrack);
    return new DOMMatrix(styles.transform).m41;
  }

  isFirstImage() {
    const currentTransform = this.getCurrentTransformValue();
    return currentTransform === 0;
  }

  isLastImage() {
    const sliderTrackWidth = this.getSliderTrackWidth();
    const currentTransform = this.getCurrentTransformValue();
    return currentTransform === -(this.sliderImages.length - 1) * sliderTrackWidth;
  }

  moveSliderOneImageForward() {
    const sliderTrackWidth = this.getSliderTrackWidth();
    const currentTransform = this.getCurrentTransformValue();
    this.sliderTrack.style.transform = `translateX(${currentTransform - sliderTrackWidth}px)`;
  }

  moveSliderOneImageBackward() {
    const sliderTrackWidth = this.getSliderTrackWidth();
    const currentTransform = this.getCurrentTransformValue();
    this.sliderTrack.style.transform = `translateX(${currentTransform + sliderTrackWidth}px)`;
  }

  moveSliderToFirstImage() {
    this.sliderTrack.style.transform = 'translateX(0)';
  }

  moveSliderToLastImage() {
    const sliderTrackWidth = this.getSliderTrackWidth();
    this.sliderTrack.style.transform = `translateX(${
      -(this.sliderImages.length - 1) * sliderTrackWidth
    }px)`;
  }
}

// Handles the next/previous image button logic
export const handleNextAndPreviousButton = function handleNextAndPreviousButton() {
  const imageSlider = getElement('.image-slider');
  const sliderTrack = getElement('.slider-track');
  const sliderImages = document.querySelectorAll('.slider-track img');
  const dotNavigationElements = document.querySelectorAll('.dot-container div');
  const slideController = new SlideController();

  let transitionEnded = true;
  let activeIndex;

  imageSlider.addEventListener('click', (e) => {
    /* const sliderTrackStyles = window.getComputedStyle(sliderTrack);
    const sliderTrackTransformValue = new DOMMatrix(sliderTrackStyles.transform).m41;
    const sliderTrackWidth = sliderTrack.getBoundingClientRect().width; */

    sliderTrack.addEventListener('transitionend', () => {
      transitionEnded = true;
    });

    // Adds the width of the .slider-Track to it's current transform: translateX value.
    // This moves the .slider-tracks one image to the left.
    if (e.target.matches('.move-to.previous') && transitionEnded === true) {
      // If the first image is in focus, display the last image on clicking previous
      if (slideController.isFirstImage()) {
        slideController.moveSliderToLastImage();
        /* sliderTrack.style.transform = `translateX(${
          -(sliderImages.length - 1) * sliderTrackWidth
        }px)`; */

        // Removes any .is-active class from the dot navigation
        // Adds the .is-active class to the last dot
        updateDotNavigation(dotNavigationElements, dotNavigationElements.length - 1);
      } else {
        // If the first image is NOT in focus, move one image to the left, when clicking previous
        slideController.moveSliderOneImageBackward();
        /* sliderTrack.style.transform = `translateX(${
          sliderTrackTransformValue + sliderTrackWidth
        }px)`;
 */
        // Calculates which image is currently in focus
        activeIndex = Math.abs(sliderTrackTransformValue) / sliderTrackWidth - 1;
        // Removes any .is-active class from the dot navigation
        // Adds .is-active class to the dot that corresponds to the image that will be in focus
        updateDotNavigation(dotNavigationElements, activeIndex);
      }

      transitionEnded = false;

      // Substracts the width of the .slider-track element from it's current transform: translateX value.
      // This moves the .slider-track one image to the right.
    } else if (e.target.matches('.move-to.next') && transitionEnded === true) {
      // If the last image is in focus, show the first image when clicking next
      if (slideController.isLastImage()) {
        slideController.moveSliderToFirstImage();
        /* sliderTrack.style.transform = 'translateX(0)'; */

        // Removes any .is-active class from the dot navigation
        // Adds the .is-active class to the first dot
        updateDotNavigation(dotNavigationElements, 0);
      } else {
        // If the last image is NOT in focus, move the .slide-track one image to the right
        slideController.moveSliderOneImageForward();
        /* sliderTrack.style.transform = `translateX(${
          sliderTrackTransformValue - sliderTrackWidth
        }px)`; */

        // Calculates which image is currently in focus
        activeIndex = Math.abs(sliderTrackTransformValue / sliderTrackWidth - 1);
        // Removes any .is-active class from the dot navigation
        // Adds .is-active class to the dot that corresponds to the image that will be in focus
        updateDotNavigation(dotNavigationElements, activeIndex);
      }

      transitionEnded = false;
    }
  });
};
