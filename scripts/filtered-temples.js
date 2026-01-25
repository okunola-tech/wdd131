// Toggle Navigation Menu
const menuButton = document.querySelector('#menuButton');
const navMenu = document.querySelector('#navMenu');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  const isOpen = navMenu.classList.contains('open');
  menuButton.textContent = isOpen ? '✖' : '☰';
  menuButton.setAttribute('aria-expanded', isOpen);
});

// Temple Array (7 original + 3 new)
const temples = [
  {name: "Salt Lake Temple", location: "Salt Lake City, UT", dedicated: 1893, area: 253000, imageURL: "https://via.placeholder.com/400x250?text=Salt+Lake+Temple"},
  {name: "Rome Italy Temple", location: "Rome, Italy", dedicated: 2019, area: 21000, imageURL: "https://via.placeholder.com/400x250?text=Rome+Temple"},
  {name: "Tokyo Japan Temple", location: "Tokyo, Japan", dedicated: 1980, area: 21000, imageURL: "https://via.placeholder.com/400x250?text=Tokyo+Temple"},
  {name: "Paris France Temple", location: "Paris, France", dedicated: 1925, area: 22000, imageURL: "https://via.placeholder.com/400x250?text=Paris+Temple"},
  {name: "Manila Philippines Temple", location: "Manila, Philippines", dedicated: 1984, area: 22500, imageURL: "https://via.placeholder.com/400x250?text=Manila+Temple"},
  {name: "Laie Hawaii Temple", location: "Laie, Hawaii", dedicated: 1919, area: 17600, imageURL: "https://via.placeholder.com/400x250?text=Laie+Temple"},
  {name: "London England Temple", location: "London, England", dedicated: 1958, area: 21000, imageURL: "https://via.placeholder.com/400x250?text=London+Temple"},
  {name: "Mexico City Temple", location: "Mexico City, Mexico", dedicated: 1983, area: 21200, imageURL: "https://via.placeholder.com/400x250?text=Mexico+City+Temple"},
  {name: "Accra Ghana Temple", location: "Accra, Ghana", dedicated: 2004, area: 10500, imageURL: "https://via.placeholder.com/400x250?text=Accra+Temple"},
  {name: "Denver Colorado Temple", location: "Denver, CO", dedicated: 1986, area: 22000, imageURL: "https://via.placeholder.com/400x250?text=Denver+Temple"}
];

// Generate Temple Cards
function displayTemples(array) {
  const container = document.getElementById("temples-container");
  container.innerHTML = ""; // clear previous cards

  array.forEach(temple => {
    const card = document.createElement("div");
    card.className = "temple-card";

    card.innerHTML = `
      <h3>${temple.name}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageURL}" alt="${temple.name}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

// Filter Function
function filterTemples(criteria) {
  let filtered;
  switch(criteria) {
    case "Old":
      filtered = temples.filter(t => t.dedicated < 1900);
      break;
    case "New":
      filtered = temples.filter(t => t.dedicated > 2000);
      break;
    case "Large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "Small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }
  displayTemples(filtered);
}

// Nav Menu Filters
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const filter = link.textContent;
    filterTemples(filter);
  });
});

// Footer Year & Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Initial Display
displayTemples(temples);
