const stateWiseCrops = {
    "Bihar": [
        { "name": "गेहूं (Wheat)", "price": "₹2200/quintal" },
        { "name": "चावल (Rice)", "price": "₹2500/quintal" },
        { "name": "जौ (Barley)", "price": "₹2400/quintal" },
        { "name": "आलू (Potato)", "price": "₹1300/quintal" },
        { "name": "प्याज (Onion)", "price": "₹1800/quintal" },
        { "name": "मिर्च (Chili)", "price": "₹9500/quintal" },
        { "name": "गन्ना (Sugarcane)", "price": "₹1600/ton" },
        { "name": "जूट (Jute)", "price": "₹3200/quintal" }
    ],
    "Maharashtra": [
        { "name": "गेहूं (Wheat)", "price": "₹2300/quintal" },
        { "name": "चावल (Rice)", "price": "₹2700/quintal" },
        { "name": "कपास (Cotton)", "price": "₹3100/quintal" },
        { "name": "आलू (Potato)", "price": "₹1600/quintal" },
        { "name": "प्याज (Onion)", "price": "₹2200/quintal" },
        { "name": "मिर्च (Chili)", "price": "₹13000/quintal" }
    ],
    "Punjab": [
        { "name": "गेहूं (Wheat)", "price": "₹2100/quintal" },
        { "name": "चावल (Rice)", "price": "₹2500/quintal" },
        { "name": "जौ (Barley)", "price": "₹2200/quintal" },
        { "name": "आलू (Potato)", "price": "₹1500/quintal" },
        { "name": "प्याज (Onion)", "price": "₹2300/quintal" },
        { "name": "मिर्च (Chili)", "price": "₹11500/quintal" }
    ],
    "Uttar Pradesh": [
        { "name": "गेहूं (Wheat)", "price": "₹2200/quintal" },
        { "name": "चावल (Rice)", "price": "₹2600/quintal" },
        { "name": "सोयाबीन (Soybean)", "price": "₹2300/quintal" },
        { "name": "आलू (Potato)", "price": "₹1400/quintal" },
        { "name": "प्याज (Onion)", "price": "₹1900/quintal" },
        { "name": "मिर्च (Chili)", "price": "₹10000/quintal" }
    ],
    "Tamil Nadu": [
        { "name": "चावल (Rice)", "price": "₹2700/quintal" },
        { "name": "गन्ना (Sugarcane)", "price": "₹1700/ton" },
        { "name": "आलू (Potato)", "price": "₹1500/quintal" },
        { "name": "प्याज (Onion)", "price": "₹2000/quintal" },
        { "name": "मिर्च (Chili)", "price": "₹11000/quintal" }
    ],
    "Andhra Pradesh": [
        { "name": "चावल (Rice)", "price": "₹2800/quintal" },
        { "name": "कपास (Cotton)", "price": "₹3200/quintal" },
        { "name": "गन्ना (Sugarcane)", "price": "₹1800/ton" },
        { "name": "आलू (Potato)", "price": "₹1600/quintal" },
        { "name": "प्याज (Onion)", "price": "₹1900/quintal" }
    ],
    "Karnataka": [
        { "name": "गेहूं (Wheat)", "price": "₹2400/quintal" },
        { "name": "चावल (Rice)", "price": "₹2600/quintal" },
        { "name": "कपास (Cotton)", "price": "₹3400/quintal" },
        { "name": "आलू (Potato)", "price": "₹1700/quintal" },
        { "name": "प्याज (Onion)", "price": "₹2000/quintal" }
    ],
    "West Bengal": [
        { "name": "चावल (Rice)", "price": "₹2500/quintal" },
        { "name": "गन्ना (Sugarcane)", "price": "₹1600/ton" },
        { "name": "आलू (Potato)", "price": "₹1400/quintal" },
        { "name": "प्याज (Onion)", "price": "₹1900/quintal" }
    ],
    "Rajasthan": [
        { "name": "गेहूं (Wheat)", "price": "₹2100/quintal" },
        { "name": "चावल (Rice)", "price": "₹2400/quintal" },
        { "name": "कपास (Cotton)", "price": "₹3100/quintal" },
        { "name": "आलू (Potato)", "price": "₹1500/quintal" },
        { "name": "प्याज (Onion)", "price": "₹2200/quintal" }
    ],
    "Haryana": [
        { "name": "गेहूं (Wheat)", "price": "₹2200/quintal" },
        { "name": "चावल (Rice)", "price": "₹2500/quintal" },
        { "name": "प्याज (Onion)", "price": "₹2100/quintal" },
        { "name": "आलू (Potato)", "price": "₹1400/quintal" },
        { "name": "गन्ना (Sugarcane)", "price": "₹1700/ton" }
    ],
    "Assam": [
        { "name": "चावल (Rice)", "price": "₹2800/quintal" },
        { "name": "प्याज (Onion)", "price": "₹2000/quintal" },
        { "name": "आलू (Potato)", "price": "₹1500/quintal" }
    ],
    "Odisha": [
        { "name": "चावल (Rice)", "price": "₹2600/quintal" },
        { "name": "गन्ना (Sugarcane)", "price": "₹1600/ton" },
        { "name": "आलू (Potato)", "price": "₹1400/quintal" }
    ],
    "Chhattisgarh": [
        { "name": "चावल (Rice)", "price": "₹2500/quintal" },
        { "name": "गन्ना (Sugarcane)", "price": "₹1700/ton" },
        { "name": "आलू (Potato)", "price": "₹1600/quintal" },
        { "name": "प्याज (Onion)", "price": "₹2000/quintal" }
    ],
    "Uttarakhand": [
        { "name": "गेहूं (Wheat)", "price": "₹2200/quintal" },
        { "name": "चावल (Rice)", "price": "₹2500/quintal" },
        { "name": "आलू (Potato)", "price": "₹1400/quintal" },
        { "name": "प्याज (Onion)", "price": "₹1900/quintal" }
    ],
    "Madhya Pradesh": [
        { "name": "गेहूं (Wheat)", "price": "₹2200/quintal" },
        { "name": "चावल (Rice)", "price": "₹2400/quintal" },
        { "name": "सोयाबीन (Soybean)", "price": "₹2300/quintal" },
        { "name": "आलू (Potato)", "price": "₹1500/quintal" },
        { "name": "प्याज (Onion)", "price": "₹1800/quintal" }
    ],
    "Gujarat": [
        { "name": "गेहूं (Wheat)", "price": "₹2300/quintal" },
        { "name": "चावल (Rice)", "price": "₹2600/quintal" },
        { "name": "कपास (Cotton)", "price": "₹3200/quintal" },
        { "name": "आलू (Potato)", "price": "₹1700/quintal" },
        { "name": "प्याज (Onion)", "price": "₹2000/quintal" }
    ]
};

// Function to display crop prices for a specific state
function displayStateCrops(state) {
    const cropPricesDiv = document.getElementById("cropPricesData");
    cropPricesDiv.innerHTML = ""; // Clear previous data

    if (!stateWiseCrops[state]) {
        cropPricesDiv.innerHTML = `<p class="text-red-500">No data available for ${state}.</p>`;
        return;
    }

    const crops = stateWiseCrops[state];
    crops.forEach(crop => {
        const cropDiv = document.createElement("div");
        cropDiv.className = "flex justify-between items-center border-b py-2";
        cropDiv.innerHTML = `
            <span class="text-gray-700 font-medium">${crop.name}</span>
            <span class="text-green-600 font-bold">${crop.price}</span>
        `;
        cropPricesDiv.appendChild(cropDiv);
    });
}

// Function to search crops based on the state and crop name
function searchCrop() {
    const state = document.getElementById("stateSelect").value;
    const query = document.getElementById("cropSearch").value.toLowerCase();

    const filteredCrops = stateWiseCrops[state]?.filter(crop =>
        crop.name.toLowerCase().includes(query)
    ) || [];

    const cropPricesDiv = document.getElementById("cropPricesData");
    cropPricesDiv.innerHTML = ""; // Clear previous data

    if (filteredCrops.length === 0) {
        cropPricesDiv.innerHTML = `<p class="text-red-500">No matching crops found.</p>`;
    } else {
        filteredCrops.forEach(crop => {
            const cropDiv = document.createElement("div");
            cropDiv.className = "flex justify-between items-center border-b py-2";
            cropDiv.innerHTML = `
                <span class="text-gray-700 font-medium">${crop.name}</span>
                <span class="text-green-600 font-bold">${crop.price}</span>
            `;
            cropPricesDiv.appendChild(cropDiv);
        });
    }
}

// Initialize Page
document.addEventListener("DOMContentLoaded", () => {
    displayStateCrops("Bihar"); // Default state on page load
});

// Event listener for State Selection
document.getElementById("stateSelect").addEventListener("change", (event) => {
    const selectedState = event.target.value;
    displayStateCrops(selectedState); // Display crops based on selected state
    searchCrop(); // Update search results based on current search term
});

// Event listener for Crop Search Input
document.getElementById("cropSearch").addEventListener("input", searchCrop);

// Set up your OpenWeatherMap API key
const apiKey = 'a7348d621e9cf94672f991d33be7f306';  // Replace with your actual API key from OpenWeatherMap

// Function to fetch real-time weather data for a specific location (by city)
// Fetch real-time weather data for a specific location (city)
async function fetchWeatherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    const data = await response.json();

    return {
        forecast: {
            temperature: `${data.main.temp}°C`,
            humidity: `${data.main.humidity}%`,
            windSpeed: `${data.wind.speed} km/h`,
        },
        weatherCondition: data.weather[0].description, // Weather condition (e.g., Clear, Rain, etc.)
        pressure: data.main.pressure, // Atmospheric pressure in hPa
        visibility: data.visibility, // Visibility in meters
        cloudiness: data.clouds.all, // Cloudiness percentage
        sunrise: data.sys.sunrise, // Sunrise time (Unix timestamp)
        sunset: data.sys.sunset, // Sunset time (Unix timestamp)
        chartData: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            data: [data.main.temp, data.main.temp + 2, data.main.temp + 4, data.main.temp + 1, data.main.temp - 1],  // Placeholder for chart data
        },
    };
}

// Function to populate the weather data for the selected state or city
async function updateWeatherDataForState(state) {
    // Fetch real-time weather data from API
    const weatherData = await fetchWeatherData(state);

    // Update weather details
    const weatherDetails = document.getElementById('weatherDetails');
    weatherDetails.innerHTML = `
        <p><strong>Temperature:</strong> ${weatherData.forecast.temperature}</p>
        <p><strong>Humidity:</strong> ${weatherData.forecast.humidity}</p>
        <p><strong>Wind Speed:</strong> ${weatherData.forecast.windSpeed}</p>
        <p><strong>Weather Condition:</strong> ${weatherData.weatherCondition}</p>
        <p><strong>Pressure:</strong> ${weatherData.pressure} hPa</p>
        <p><strong>Visibility:</strong> ${weatherData.visibility / 1000} km</p>
        <p><strong>Cloudiness:</strong> ${weatherData.cloudiness}%</p>
        <p><strong>Sunrise:</strong> ${new Date(weatherData.sunrise * 1000).toLocaleTimeString()}</p>
        <p><strong>Sunset:</strong> ${new Date(weatherData.sunset * 1000).toLocaleTimeString()}</p>
    `;

    // Update weather chart
    loadWeatherChart(weatherData.chartData);
}

// Function to render the weather chart (using Chart.js)
function loadWeatherChart(chartData) {
    const ctx = document.getElementById('weatherChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartData.labels,
            datasets: [{
                label: 'Temperature (°C)',
                data: chartData.data,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 1,
            }],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}

// Event listener for state selection (could be city or state selection)
document.getElementById('stateSelect').addEventListener('change', function(event) {
    const selectedState = event.target.value;
    updateWeatherDataForState(selectedState);
});

// Initial load (for example, showing weather data for 'Bihar')
updateWeatherDataForState('Bihar');  // You can replace 'Bihar' with any default location

 // Predefined list of flood-prone regions with lat/lon bounds
 const floodProneRegions = [
    { name: "Kosi River Basin (Bihar)", latMin: 25.5, latMax: 27.5, lonMin: 84.5, lonMax: 87.0 },
    { name: "Brahmaputra River Basin (Assam)", latMin: 26.0, latMax: 27.5, lonMin: 91.0, lonMax: 94.0 },
    { name: "Sundarbans (West Bengal)", latMin: 21.5, latMax: 22.5, lonMin: 88.0, lonMax: 89.0 },
    { name: "Mahanadi River Basin (Odisha)", latMin: 19.5, latMax: 21.0, lonMin: 83.0, lonMax: 85.0 },
    { name: "Mumbai Metropolitan Region", latMin: 18.5, latMax: 19.5, lonMin: 72.5, lonMax: 73.5 },
    { name: "Godavari Basin (Andhra Pradesh)", latMin: 16.5, latMax: 17.5, lonMin: 81.0, lonMax: 82.0 },
];

// Sample Data for Weather Alerts
const alertData = {
    weatherAlerts: [
        "Heavy rain expected in the next 24 hours.",
        "Strong winds advisory in effect.",
        "Severe thunderstorms possible in the region.",
    ],
};

// Function to populate weather alerts
function loadWeatherAlerts() {
    const weatherAlertDetails = document.getElementById('weatherAlertDetails');
    // Dynamically load weather alerts
    weatherAlertDetails.innerHTML = alertData.weatherAlerts.map(alert => `<p>${alert}</p>`).join('');
}

// Function to detect user location
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("userLocation").innerText = "Geolocation is not supported by this browser.";
    }
}

// Function to check if user's location falls within any flood-prone region
function checkFloodRisk(lat, lon) {
    const floodAlerts = floodProneRegions.filter(region => 
        lat >= region.latMin && lat <= region.latMax &&
        lon >= region.lonMin && lon <= region.lonMax
    );

    if (floodAlerts.length > 0) {
        return floodAlerts.map(region => `Flood Risk Detected in: ${region.name}`).join("<br>");
    } else {
        return "You are not in a flood-prone region currently.";
    }
}

// Callback function when location is successfully fetched
function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    document.getElementById("userLocation").innerHTML = 
        `Your location: Latitude ${lat.toFixed(2)}, Longitude ${lon.toFixed(2)}`;

    // Check flood risk for the user's location
    const floodAlertMessage = checkFloodRisk(lat, lon);
    document.getElementById("floodDetails").innerHTML = floodAlertMessage;
}

// Error handling for location detection
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("userLocation").innerText = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("userLocation").innerText = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById("userLocation").innerText = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("userLocation").innerText = "An unknown error occurred.";
            break;
    }
    document.getElementById("floodDetails").innerText = "Unable to load flood alerts.";
}

// Automatically get user location and load alerts on page load
window.onload = function () {
    loadWeatherAlerts(); // Load weather alerts
    getUserLocation();  // Get user location for flood alerts
};
