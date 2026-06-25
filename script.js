// script.js
// Código JavaScript para el menú responsive y las interacciones de la página.

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const toast = document.getElementById('toastMessage');
const pageLoader = document.getElementById('pageLoader');

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add('show');

  window.setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
};

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

const buttons = [
  {
    id: 'btnPlay',
    message: 'Listo para explorar la noche. ¡Que comience la aventura!'
  },
  {
    id: 'btnLore',
    message: 'La historia se revela con cada paso en el bosque misterioso.'
  },
  {
    id: 'btnLoreMore',
    message: 'Más detalles desbloqueados. Pronto habrá nuevas misiones.'
  }
];

buttons.forEach((buttonConfig) => {
  const button = document.getElementById(buttonConfig.id);
  if (button) {
    button.addEventListener('click', () => {
      showToast(buttonConfig.message);
    });
  }
});

window.addEventListener('load', () => {
  pageLoader.classList.add('hidden');
});

// Cerrar el menú cuando el usuario hace clic en un enlace de navegación.
mainNav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    mainNav.classList.remove('open');
  }
});
