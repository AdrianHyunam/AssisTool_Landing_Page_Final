 document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');

    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        const isOpen = menu.classList.contains('translate-y-0');
        if (isOpen) {
          menu.classList.remove('translate-y-0');
          menu.classList.add('-translate-y-4', 'opacity-0', 'pointer-events-none');
          icon.textContent = '☰';
        } else {
          menu.classList.remove('-translate-y-4', 'opacity-0', 'pointer-events-none');
          menu.classList.add('translate-y-0');
          icon.textContent = '✕';
        }
      });
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        menu.classList.add('-translate-y-4', 'opacity-0', 'pointer-events-none');
        menu.classList.remove('translate-y-0');
        icon.textContent = '☰';
      }
    });
  });