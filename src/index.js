import './timeline.js';

window.theme = 2;

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