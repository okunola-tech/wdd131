const movies = [
  {
    title: "Inception",
    genre: "Sci-Fi",
    year: 2010,
    image: "images/inception.jpg"
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    image: "images/dark-knight.jpg"
  },
  {
    title: "Breaking Bad",
    genre: "Drama",
    year: 2008,
    image: "images/breaking-bad.jpg"
  }
];

function displayMovies(list, containerId) {
  const container = document.querySelector(containerId);
  if (!container) return;

  container.innerHTML = "";

  list.forEach(movie => {
    container.innerHTML += `
      <div class="movie-card">
        <img 
          src="${movie.image}" 
          alt="Poster of ${movie.title}" 
          loading="lazy"
          width="200"
          height="300"
        >
        <h3>${movie.title}</h3>
        <p>${movie.genre} • ${movie.year}</p>
        <button onclick="addFavorite('${movie.title}')">
          Add to Favorites
        </button>
      </div>
    `;
  });
}

function filterMovies(genre) {
  if (genre === "All") {
    return movies;
  } else {
    return movies.filter(movie => movie.genre === genre);
  }
}

function addFavorite(title) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.includes(title)) {
    favorites.push(title);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
  loadFavorites();
}

function loadFavorites() {
  const list = document.querySelector("#favoritesList");
  if (!list) return;

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  list.innerHTML = "";

  favorites.forEach(item => {
    list.innerHTML += `<li>${item}</li>`;
  });
}

function handleForm() {
  const form = document.querySelector("#contactForm");
  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#formMessage");
    message.textContent = `Thank you ${name}! We received your submission.`;
  });
}

document.addEventListener("DOMContentLoaded", () => {

  const year = document.querySelector("#year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  displayMovies(movies, "#featuredContainer");
  displayMovies(movies, "#movieContainer");
  loadFavorites();
  handleForm();

  const genreSelect = document.querySelector("#genreSelect");
  if (genreSelect) {
    genreSelect.addEventListener("change", event => {
      const filtered = filterMovies(event.target.value);
      displayMovies(filtered, "#movieContainer");
    });
  }
});