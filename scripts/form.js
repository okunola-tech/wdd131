const products = [
    { id: "p100", name: "Smart Thermostat" },
    { id: "p101", name: "Wireless Doorbell" },
    { id: "p102", name: "Security Camera" },
    { id: "p103", name: "Smart Light Bulb" }
];

// Populate product select
const productSelect = document.getElementById("product");
if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Review counter
const countDisplay = document.getElementById("reviewCount");
if (countDisplay) {
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    count++;
    localStorage.setItem("reviewCount", count);
    countDisplay.textContent = count;
}
