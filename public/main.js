'use strict';                   

const move = (event) => {         
  if (event.target.classList.contains('images') && event.type === 'mousedown') {
    event.target.style.width = '900px';
    event.target.style.height = '700px';          
  } else if (event.type === 'mouseup' && event.target.classList.contains('images')){
    event.target.style.width = '500px';
    event.target.style.height = '400px'; 
  }
}

document.addEventListener('mousedown', move, false);
document.addEventListener('mouseup', move, false);
  


  
  
