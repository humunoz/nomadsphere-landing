const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Background slideshow
const images = [
  'img/selva-ciudad-1.jpg',
  'img/selva-ciudad-2.jpg',
  'img/selva-ciudad-3.jpg',
  'img/selva-ciudad-4.jpg'
];

let current = 0;
const background = document.createElement('div');
background.id = 'background';
document.body.appendChild(background);

function changeBackground() {
  background.style.backgroundImage = `url('${images[current]}')`;
  current = (current + 1) % images.length;
}

setInterval(changeBackground, 5000); // Cambia cada 5 segundos
changeBackground();

