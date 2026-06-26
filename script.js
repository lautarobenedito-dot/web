const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

function activateTab(targetId) {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.target === targetId;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  tabPanels.forEach((panel) => {
    panel.classList.toggle('active', panel.id === targetId);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activateTab(button.dataset.target);
  });

  button.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      const currentIndex = Array.prototype.indexOf.call(tabButtons, event.currentTarget);
      const nextIndex = event.key === 'ArrowRight'
        ? (currentIndex + 1) % tabButtons.length
        : (currentIndex - 1 + tabButtons.length) % tabButtons.length;
      tabButtons[nextIndex].focus();
    }
  });
});

window.addEventListener('DOMContentLoaded', () => {
  activateTab('inicio');
});
