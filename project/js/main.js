// ===============================
// MOVIE & TV SHOW DATA (all lowercase paths)
// ===============================

const media = [
  {
    id: 1,
    title: "Inception",
    type: "Movie",
    genre: "Sci-Fi",
    year: 2010,
    image: "./images/inception.jpg"  // relative to project folder
  },
  {
    id: 2,
    title: "The Dark Knight",
    type: "Movie",
    genre: "Action",
    year: 2008,
    image: "./images/dark-knight.jpg"
  },
  {
    id: 3,
    title: "Breaking Bad",
    type: "TV Show",
    genre: "Drama",
    year: 2008,
    image: "./images/breaking-bad.jpg"
  }
];

// ===============================
// DOM ELEMENTS
// ===============================

const container = document.querySelector("#movieContainer");
const genreSelect = document.querySelector("#genreSelect");
const favoritesList = document.querySelector("#favoritesList");
const yearSpan = document.querySelector("#year");

// ===============================
// FOOTER YEAR
// ===============================

yearSpan.textContent = new Date().getFullYear();

// ===============================
// LOCAL STORAGE
// ===============================

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// ===============================
// DISPLAY MEDIA
// ===============================

function displayMedia(mediaArray) {
  container.innerHTML = "";

  mediaArray.forEach(item => {
    const isFavorite = favorites.includes(item.id);

    container.innerHTML += `
      <div class="movie-card">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <h3>${item.title}</h3>
        <p>Type: ${item.type}</p>
        <p>Genre: ${item.genre}</p>
        <p>Year: ${item.year}</p>
        <button data-id="${item.id}">
          ${isFavorite ? "Remove Favorite" : "Add to Favorites"}
        </button>
      </div>
    `;
  });
}

// ===============================
// FILTER BY GENRE
// ===============================

function filterMedia() {
  const selectedGenre = genreSelect.value;

  if (selectedGenre === "All") {
    displayMedia(media);
  } else {
    const filtered = media.filter(item => item.genre === selectedGenre);
    displayMedia(filtered);
  }
}

// ===============================
// TOGGLE FAVORITE
// ===============================

function toggleFavorite(id) {
  const mediaId = Number(id);

  if (favorites.includes(mediaId)) {
    favorites = favorites.filter(fav => fav !== mediaId);
  } else {
    favorites.push(mediaId);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  filterMedia();
  displayFavorites();
}

// ===============================
// DISPLAY FAVORITES
// ===============================

function displayFavorites() {
  favoritesList.innerHTML = "";

  const favoriteItems = media.filter(item =>
    favorites.includes(item.id)
  );

  if (favoriteItems.length === 0) {
    favoritesList.innerHTML = `<li>No favorites selected yet.</li>`;
    return;
  }

  favoriteItems.forEach(item => {
    favoritesList.innerHTML += `
      <li>${item.title} (${item.year})</li>
    `;
  });
}

// ===============================
// EVENT LISTENERS
// ===============================

genreSelect.addEventListener("change", filterMedia);

container.addEventListener("click", event => {
  if (event.target.tagName === "BUTTON") {
    const id = event.target.getAttribute("data-id");
    toggleFavorite(id);
  }
});

// ===============================
// INITIAL LOAD
// ===============================

displayMedia(media);
displayFavorites();