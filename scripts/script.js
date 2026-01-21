// Footer date & year
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Wind chill calculation
function calculateWindChill(tempC, windKmh) {
    // One-line formula (metric units)
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

// Static weather values
const temperature = 8; // °C
const windSpeed = 20; // km/h
const windChillEl = document.getElementById('windchill');

// Conditions: Temperature <= 10°C and Wind > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
    windChillEl.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
} else {
    windChillEl.textContent = "N/A";
}
