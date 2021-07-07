'use strict'

const main = () => {

console.log('JS running')

  const aboutButton = document.querySelector('.about-button');
  const aboutText = document.querySelector('.about-text');
  aboutButton.addEventListener('click', function (event){
    console.log('click');
    aboutText.style.visibility = 'visible';
    aboutText.style.animation = 'enter-text 2s ease-in';
  })

  // const image = document.querySelector('#picture');
  // image.addEventListener('click', () => {
  //   let source = 'http://localhost:3010/images/cat-one.jpg'
  //   image.setAttribute.src = source;
  //   console.log(source)
  // })

  // console.log(image.src)
  
}

window.addEventListener('load', main)