'use strict';

const main = document.querySelector('main')
let contador = 1;
let element = `<section class="galeria"><secton class="fotoPeque"><img class="pequeña" src="../images/1.jpg" alt="imagen fatima">
<img class="pequeña" src="../images/2.jpg" alt="imagen fatima">
<img class="pequeña" src="../images/5.jpg" alt="imagen fatima">
<img class="pequeña" src="../images/6.jpg" alt="imagen fatima">
<img class="pequeña" src="../images/4.jpg" alt="imagen fatima"></secton>`
let fotoGrande = `<section class="fotGrande"><img src="../images/1.jpg" alt="imagen fatima"></section></section>`   
render(main, element + fotoGrande)

let fotografias = document.querySelectorAll('.pequeña')
fotografias.forEach( (foto) => {
    foto.addEventListener('click', selectFoto)
})

function render(dom, element){
    dom.innerHTML = element;
}

function selectFoto(event){
    console.log(event.toElement.outerHTML)
    let valor = `<section class="fotGrande">${event.toElement.outerHTML}</section></section>`
    render(main, element + valor)
    let fotografias = document.querySelectorAll('.pequeña')
    fotografias.forEach( (foto) => {
    foto.addEventListener('click', selectFoto)
})
}