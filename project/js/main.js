const products = [
  { id: "p1", name: "Solar Panel Pro" },
  { id: "p2", name: "EcoWater Filter" },
  { id: "p3", name: "Smart Thermostat" },
  { id: "p4", name: "Energy Saver AC" }
];

const productSelect = document.querySelector("#product");

if (productSelect) {
  products.forEach(product => {
    productSelect.innerHTML += `
      <option value="${product.id}">
        ${product.name}
      </option>
    `;
  });
}

const form = document.querySelector("#reviewForm");

if (form) {
  form.addEventListener("submit", () => {
    let reviewTotal = Number(localStorage.getItem("reviewTotal")) || 0;
    reviewTotal++;
    localStorage.setItem("reviewTotal", reviewTotal);
  });
}

const reviewDisplay = document.querySelector("#reviewCount");

if (reviewDisplay) {
  const total = Number(localStorage.getItem("reviewTotal")) || 0;
  reviewDisplay.textContent =
    `You have submitted ${total} review(s).`;
}