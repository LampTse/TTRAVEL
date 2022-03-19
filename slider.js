var i = 0; // Start point
var images = [];
var time = 2000;

// Image list
images[0] = '/images/about_us/slider/1.jpg';
images[1] = '/images/about_us/slider/2.jpg';
images[2] = '/images/about_us/slider/3.jpg';
images[3] = '/images/about_us/slider/4.jpg';
images[3] = '/images/about_us/slider/5.jpg';

// Change Image
function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout('changeImg()', time);
}

window.onload = changeImg;
