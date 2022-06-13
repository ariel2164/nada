'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroButtonSi = document.getElementById('heroButtonSi');
  const heroButtonNo = document.querySelector('#heroButtonNo');

  const noSomosNovios = () => {
    alert('💞 No Somos Nada 💞');
    alert('😱Nuestra Boda Es Mañana😱');
    location.href = 'https://www.youtube.com/watch?v=z0hWGUfxbbg';
  };

  const evitarQueRompanMiCorazon = () => {
    heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
  };

  const partner = prompt('🥰 Dime 2 name 🥰');
  heroTitle.innerHTML += partner + ' ❤';

  heroButtonSi.addEventListener('click', noSomosNovios);
  heroButtonNo.addEventListener('mouseover', evitarQueRompanMiCorazon);
};

document.addEventListener('DOMContentLoaded', documentReady);