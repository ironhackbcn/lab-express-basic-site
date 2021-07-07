`strict`


const toDeploy = document.querySelector('.characters');

buildDom = function (html){
  toDeploy.innerHTML = html;
}

const deployCharacter = () => {

  buildDom(`
  <div class="person">
  <img class="presentation" src="https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png" alt="Michael Scott">
  <h2><a href="/about-michael">Michael Scott</a></h2>
</div>

<div class="person">
  <img class="presentation" src="https://pbs.twimg.com/profile_images/549268771484229632/WnatiHzT_400x400.jpeg" alt="Dwight K. Schrute">
  <h2><a href="/about-dwight">Dwight K. Schrute</a></h2>
</div>

<div class="person">
  <img class="presentation" src="https://i1.wp.com/unbumf.com/wp-content/uploads/2017/10/635977367199198153-1689173901_him-halpert.png?resize=759%2C500&ssl=1" alt="Jim Halpert">
  <h2>Jim Halpert</h2>
</div>

<div class="person">
  <img class="presentation" src="https://costumewall.com/wp-content/uploads/2018/09/pam-beesly.jpg" alt="Pam Beesly">
  <h2>Pam Beesly</h2>
</div>

<div class="person">
  <img class="presentation" src="https://media3.giphy.com/media/QItLfsafwiRS8/giphy.gif" alt="Kevin Malone">
  <h2>Kevin Malone</h2>
</div>
<div class="person">
  <img class="presentation" src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-the-office-angela-kinsey.jpg" alt="Angela Martin">
  <h2>Angela Martin</h2>
</div>
  `);
}

const deployButton = document.querySelector('.deploy');
deployButton.addEventListener('click', deployCharacter);

const staff = document.querySelector('.staff')
staff.addEventListener('click', )