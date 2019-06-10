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

timeline.start = new Date(2004, 0, 19);
timeline.end = new Date(2019, 0, 19);
timeline.items = [
  {
    date: new Date(2004, 0, 19),
    title: 'Birth',
    image: './img/tobermory.jpg'
  },
  {
    date: new Date(2005, 0, 19),
    title: 'First Birthday',
    image: './img/Duart.jpg'
  },
  {
    date: new Date(2007, 0, 19),
    title: 'Third Birthday',
    image: './img/Paris.jpg'
  },
  {
    date: new Date(2012, 0, 19),
    title: 'Eighth Birthday',
    image: './img/galapagos.jpg'
  },
  {
    date: new Date(2019, 0, 19),
    title: 'Fifteenth Birthday',
    image: './img/tobermory.jpg'
  }
];