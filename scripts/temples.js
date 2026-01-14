const menuButton = document.querySelector('#menuButton');
const navMenu = document.querySelector('#navMenu');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuButton.textContent = navMenu.classList.contains('open') ? '✖' : '☰';
});

// Footer Dynamic Content
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;
