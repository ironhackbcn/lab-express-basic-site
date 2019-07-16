'use strict';

// gallery
const selectedImg = document.getElementById('selected_img');
const images = document.getElementById('image_list').querySelectorAll('#image_list li');
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', activateImage);
}
function activateImage () {
  selectedImg.innerHTML = this.innerHTML;
}
