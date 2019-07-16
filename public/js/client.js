'use strict';

const header = document.querySelector('header');
const footer = document.querySelector('footer');

const headerContent = `
  <nav>
    <ul>
      <li><a href="http://localhost:3000/">Home</a></li>
      <li><a href="http://localhost:3000/gallery">Gallery</a></li>
      <li><a href="http://localhost:3000/about">About</a></li>
    </ul>
  </nav>
`;

const footerContent = `
<h3>© pierobj</h3>
`;

header.innerHTML = headerContent;
footer.innerHTML = footerContent;
