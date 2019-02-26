"use strict";

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const imgList = ["shelley1.jpg"];

let index = 0;

function changeRight() {
  let image = document.getElementById("image-gallery");

  if (index < 4) {
    index++;
  } else {
    index = 0;
  }
  image.alt = "image" + index;
  image.src = `shelley${index + 1}.jpg`;
 
}

function changeLeft() {
  let image = document.getElementById("image-gallery");

  if (index > 0) {
    index--;
  } else {
    index = 4;
  }
  image.alt = "image" + index;
  image.src = `shelley${index + 1}.jpg`;
}

arrowLeft.addEventListener("click", changeLeft);
arrowRight.addEventListener("click", changeRight);
