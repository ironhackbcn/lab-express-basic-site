function changeBackgroundText() {
  var changeText = document.querySelector(".change-text");
  if (changeText.innerHTML == "#Linguist") {
    changeText.innerHTML = "#Web Developer";
  } else if (changeText.innerHTML == "#Web Developer") {
    changeText.innerHTML = "#Traveller";
  } else if (changeText.innerHTML == "#Traveller") {
    changeText.innerHTML = "#Tango dancer";
  } else if (changeText.innerHTML == "#Tango dancer") {
    changeText.innerHTML = "#Cat lover";
  } else if (changeText.innerHTML == "#Cat lover") {
    changeText.innerHTML = "#Linguist";
  }
}

function changeBackground() {
  changeBackgroundText();
}

// Run this function every 300ms
setInterval(changeBackground, 500);
