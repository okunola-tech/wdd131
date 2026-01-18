const menuButton = document.querySelector('#menuButton');
const navMenu = document.querySelector('#navMenu');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  const isOpen = navMenu.classList.contains('open');
  menuButton.textContent = isOpen ? '✖' : '☰';
  menuButton.setAttribute('aria-expanded', isOpen);
});

// Footer Dynamic Content
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;

