
const baseURL = 'https://lit-fortress-6467.herokuapp.com/object'
const leftCol = document.querySelector('.left-col');
const rightCol = document.querySelector('.right-col');

const imgSidebar = document.querySelector('.images-sidebar');
const imgPrev = document.querySelector('.img-preview');

let myPix = ["images/thriller.jpg","images/ghost_in_the_machine.jpg","images/red.jpg","images/21.jpg","images/the_division_bell.jpg"];

let myPix2 = ["thriller.jpg","ghost_in_the_machine.jpg","red.jpg","21.jpg","the_division_bell.jpg"];

for(let i = 0; i < myPix.length; i++){
const img = document.createElement('img');
img.className ="discography";
img.src = myPix2[i];
imgPrev.appendChild(img);

}


//API Request
fetch(baseURL).then ((res) => {
let album = document.querySelector('.img-preview');

image.src = 'images/thriller,jpg';

}); //END Fetch