import './timeline.js';

/*
  Create colour scheme. window.colours and window.theme can be referenced anywhere for the selected colour pallete. This is for easy
  editing and comparing.
*/
window.theme = 0;

window.colours = [
  {
    "background": "#222",
    "text": "#fff",
    "primary": "#fff"
  },
  {
    "background": "#fff",
    "text": "#222",
    "primary": "#222"
  },
  {
    "background": "#efda9e",
    "text": "#444",
    "primary": "#b71c1c"
  }
];

document.body.style.background = colours[theme].background;
document.body.style.color = colours[theme].text;

/*
  Provide Objects to the timeline component. This could be done in html, but is much simpler in JavaScript.
*/
const timeline = document.querySelector('ww-timeline');

// July 28, 1914 – November 11, 1918
timeline.start = new Date(1914, 6, 28);
timeline.end = new Date(1918, 10, 11);
timeline.items = [
  {
    title: 'Canada\'s Entry',
    date: new Date(1914, 6, 28),
    image: './img/galapagos.jpg'
  },
  {
    title: 'The Second Battle of Ypres',
    date: new Date(1915, 3, 22),
    image: './img/tobermory.jpg'
  },
  {
    title: 'Battle of Festubert',
    date: new Date(1915, 4, 15),
    image: './img/Paris.jpg'
    // 15–25 May 1915
  },
  {
    title: 'Battle St. Eloi Craters',
    date: new Date(1916, 2, 27),
    image: './img/Duart.jpg'
  },
  {
    title: 'Battle Mount Sorrel',
    date: new Date(1916, 5, 2),
    image: './img/berlin.jpg'
  },
  {
    title: 'The Battle of the Somme',
    date: new Date(1916, 10, 18),
    image: './img/Paris.jpg'
  },
  {
    title: 'Vimy Ridge',
    date: new Date(1917, 3, 9),
    image: './img/tobermory.jpg'
  },
  {
    title: 'Battle of Hill 70',
    date: new Date(1917, 7, 15),
    image: './img/berlin.jpg'
  },
  {
    title: 'Battle of Passchendaele',
    date: new Date(1917, 10, 10),
    image: './img/galapagos.jpg'
  },
  {
    title: 'Defense of the German Offensives',
    date: new Date(1918, 2, 21),
    image: './img/Duart.jpg'
  },
  {
    title: 'More Independant Canada',
    date: new Date(1918, 10, 11),
    image: './img/Paris.jpg'
  }
];
/*

*/