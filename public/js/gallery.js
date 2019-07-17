'use strict';

console.log('linked');
const gallery = document.querySelector('.grid-container');
const images = document.querySelectorAll('.grid-item');

images.forEach(function (image) {
  image.addEventListener('click', expand);
});

function expand (event) {
  event.currentTarget.classList.toggle('full-grid');
}
