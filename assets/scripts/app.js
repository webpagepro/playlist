console.log("working too");
const baseURL = 'https://lit-fortress-6467.herokuapp.com/object'

const carousel = document.querySelector('.carousel');
const albumDetails = document.querySelector('.album-details');
/*
{id: 2, title: "Ghost in the Machine", artist: "The Police", cover_art: "ghost_in_the_machine.jpg"},
{id: 6, title: "Red", artist: "Black Uhuru", cover_art: "red.jpg"},
{id: 22, title: "The Division Bell", artist: "Pink Floyd", cover_art: "the_division_bell.jpg"},
{id: 18, title: "Thriller", artist: "Michael Jackson", cover_art: "thriller.jpg"},
{id: 55, title: "21", artist: "Adele", cover_art: "21.jpg"};
*/
//console.log(obj);

//API Request
fetch(baseURL)
  // once we have our data clean it up for us
  .then(function(res) {

    // turn readable stream into json (javascript object notation)
    return res.json();
  })
  // once data is turned into json do something else
  .then(function(jsonData) {
//console.log(jsonData);
let newObj = jsonData.results;

//  for (let k in newObj) {
console.log(Object.keys(newObj));

  // albumDetails.innerHTML = '<p>jsonData}</p>';

  //

  });
