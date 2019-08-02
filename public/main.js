function fadeIn(character) {
  // var characterOpacity = 0.1;

  // while (characterOpacity < 1.1) {
  //   setTimeout(() => {
  //     character.style.opacity = characterOpacity;
  //     characterOpacity += characterOpacity * 0.1;
  //   }, 200);
  // }
  var interval = setInterval(() => {
    const background = document.getElementById('container');

    if (background.style.background === 'black') {
      clearInterval(interval);
    }

    character.style.transition = 'opacity 10s';
    character.style.opacity = 1;
  }, 1000);
}

function randomCharacter() {
  const characters = document.getElementsByTagName('span');
  const charactersArray = [...characters];

  for (let i = 0; i < characters.length; i++) {
    const randomNumber = Math.floor(Math.random() * charactersArray.length);

    const interval = setInterval(fadeIn(charactersArray[randomNumber]), 1000);

    charactersArray.splice(randomNumber, 1);

    if (charactersArray.length === 0) {
      clearInterval(interval);
    }
  }
  if (charactersArray.length === 0) {
    startMain();
  }
}

function startMain() {
  const separationBar = document.getElementById('separation-bar');
  const divLinks = document.getElementById('wrapper-2');
  const background = document.getElementById('container');
  const charactersName = document.getElementById('wrapper-1');

  setTimeout(() => {
    separationBar.style.opacity = 1;
    divLinks.style.opacity = 1;
    background.style.backgroundColor = 'black';
    charactersName.style.color = 'white';
  }, 2000);
}

window.onload = function () {
  randomCharacter();
  startMain();
};
