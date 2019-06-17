import './timeline.js';
import './dialogue.js';

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
    image: './img/war.jpg'
  },
  {
    title: 'The Second Battle of Ypres',
    date: new Date(1915, 3, 22),
    image: './img/ypres.jpg'
  },
  {
    title: 'Battle of Festubert',
    date: new Date(1915, 4, 15),
    image: './img/festubert.jpg'
    // 15–25 May 1915
  },
  {
    title: 'Battle St. Eloi Craters',
    date: new Date(1916, 2, 27),
    image: './img/eloi.jpg'
  },
  {
    title: 'Battle Mount Sorrel',
    date: new Date(1916, 5, 2),
    image: './img/sorrel.jpg'
  },
  {
    title: 'The Battle of the Somme',
    date: new Date(1916, 10, 18),
    image: './img/somme.jpg'
  },
  {
    title: 'Vimy Ridge',
    date: new Date(1917, 3, 9),
    image: './img/vimy.jpg'
  },
  {
    title: 'Battle of Hill 70',
    date: new Date(1917, 7, 15),
    image: './img/hill70.jpg'
  },
  {
    title: 'Battle of Passchendaele',
    date: new Date(1917, 10, 10),
    image: './img/passchendaele.jpeg'
  },
  {
    title: 'Defense of the German Offensives',
    date: new Date(1918, 2, 21),
    image: './img/spring.jpg'
  },
  {
    title: 'More Independent Canada',
    date: new Date(1918, 10, 11),
    image: './img/victory.jpg'
  }
];
/*

*/