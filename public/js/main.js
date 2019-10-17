/* Begin Navbar */
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

function toggleNav() {
  nav.classList.toggle('nav-active');
}

burger.addEventListener('click', function () {
  toggleNav();
});
/* End Navbar */