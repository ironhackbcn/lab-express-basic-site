'use strict'

const main = () => {

console.log('JS running')

  const aboutButton = document.querySelector('.about-button');
  const aboutText = document.querySelector('.about-text');
  aboutButton.addEventListener('click', ()=>{
    console.log('click');
    aboutText.style.visibility = 'visible';
    aboutText.style.animation = 'enter-text 2s ease-in';
  })

}

window.addEventListener('load', main)