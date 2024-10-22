const body = document.querySelector('body');
const parag = document.querySelector('p');

function dark(){
    body.style.backgroundImage = 'linear-gradient(to right, #262626, #404040)';
    parag.style.color = 'white';
}

function light(){
    body.style.backgroundImage = 'linear-gradient(to right, #fff, #fff)';
    parag.style.color = 'black';
}