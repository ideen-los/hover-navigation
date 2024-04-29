export const preloadedImages = [];

export const preloadImages = function preloadImages(urls) {
  const loadPromises = urls.map((url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = function () {
        preloadedImages.push(img);
        resolve(img);
      };
      img.src = url;
    });
  });
  return Promise.all(loadPromises);
};

export const addImagesToSlider = function addImagesToSlider(imagesArray) {
  const sliderTrack = document.querySelector('.slider-track');
  console.log(sliderTrack);

  imagesArray.forEach((img) => {
    console.log('working');
    sliderTrack.appendChild(img);
  });
};

export const handleNextAndPreviousButton = function handleNextAndPreviousButton() {
  const sliderTrack = document.querySelector('.slider-track');
  const sliderButtons = document.querySelectorAll('.move-to');
  const sliderImages = document.querySelectorAll('.slider-track img');

  sliderButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const sliderTrackStyles = window.getComputedStyle(sliderTrack);
      const sliderTrackTransformValue = new DOMMatrix(sliderTrackStyles.transform).m41;
      const sliderTrackWidth = sliderTrack.getBoundingClientRect().width;

      // Adds the width of the .slider-Track to it's current transform: translateX value.
      // This effectively slides to the next image.
      if (e.target.classList.contains('previous')) {
        if (sliderTrackTransformValue !== 0) {
          sliderTrack.style.transform = `translateX(${
            sliderTrackTransformValue + sliderTrackWidth
          }px)`;
          // If the first image is in focus, show the last image when clicking previous
        } else {
          sliderTrack.style.transform = `translateX(${
            -(sliderImages.length - 1) * sliderTrackWidth
          }px)`;
        }

        // Substracts the width of the .slider-track element from it's current transform: translateX value.
        // This effectively slides to the previous image.
      } else if (e.target.classList.contains('next')) {
        if (sliderTrackTransformValue !== -(sliderImages.length - 1) * sliderTrackWidth) {
          sliderTrack.style.transform = `translateX(${
            sliderTrackTransformValue - sliderTrackWidth
          }px)`;
          // If wthe last image is in focus, show the first image when clicking next
        } else {
          sliderTrack.style.transform = 'translateX(0)';
        }
      }
    });
  });
};
