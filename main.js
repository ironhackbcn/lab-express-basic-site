let leftOpenMenu;
let leftCloseMenu;

window.addEventListener("load", init);

function init() {
  let openMenu = document.getElementById("open-menu");
  let closeMenu = document.getElementById("close-menu");
  openMenu.addEventListener("click", openMenuOption);
  closeMenu.addEventListener("click", closeMenuOption);
  console.log(location.href);
}

function openMenuOption(event) {
  event.target.parentNodes;
  event.target.parentNode.parentNode.parentNode.parentNode.style.left = "0";
  event.target.parentNode.parentNode.parentNode.parentNode.style.transition =
    "all 1s";
  console.log(event.target.parentNode.parentNode.parentNode.parentNode.style);
  document.getElementById("close-menu").style.display = "block";
  document.getElementById("open-menu").style.display = "none";
}

function closeMenuOption(event) {
  event.target.parentNodes;
  event.target.parentNode.parentNode.parentNode.parentNode.style.left = "-17";
  event.target.parentNode.parentNode.parentNode.parentNode.style.transition =
    "all 1s";
  document.getElementById("close-menu").style.display = "none";
  document.getElementById("open-menu").style.display = "block";
}


function screenSize(){
  var width = window.innerWidth;
  if (width>359 && width<768){
    leftCloneMenu=-50;
    leftCloneMenu=0;
   }
}