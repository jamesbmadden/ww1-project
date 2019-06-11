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
  }
];
/*

*/