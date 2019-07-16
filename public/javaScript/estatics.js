'use strict';

const url = 'http://localhost:3000';

const header = `<h1>P.H.O.T.O.P.O.L</h1>
<nav>
    <ul>
        <a href="${url}/"><li>Home</li></a>
        <a href="${url}/about"><li>About</li></a>
        <a href="${url}/gallery"><li>Gallery</li></a>
    </ul>
</nav>`;

const footer = `<h2>Copyright by YOWcreativity | code by GRIZZLY</h2>`

const footerDOM = document.querySelector('footer')

const headerDOM = document.querySelector('header')

headerDOM.innerHTML = header;
footerDOM.innerHTML = footer;