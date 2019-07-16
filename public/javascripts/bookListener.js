'use strict';

const books = document.querySelectorAll('.gallery-container section section');

const doSomething = (event) => {
  const detail = document.querySelector('.book-detail');
  detail.classList.toggle('block');
  const detailContainer = document.querySelector('.book-detail-container');
  detailContainer.innerHTML = event.target.outerHTML;
  detailContainer.innerHTML += `<p>${event.target.nextElementSibling.textContent}</p>
  <a>cerrar</a>`;
  const close = document.querySelector('.book-detail-container a');
  close.addEventListener('click', () => detail.classList.toggle('block'));
};

books.forEach(book => book.addEventListener('click', doSomething));
