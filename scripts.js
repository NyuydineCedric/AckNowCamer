// Current Date Display
function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = now.toLocaleDateString('en-US', options);
}

updateDate();

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu li a').forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Region Tab Filtering
const tabBtns = document.querySelectorAll('.tab-btn');
const regionCards = document.querySelectorAll('.region-card');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        const region = btn.dataset.region;
        
        // Show/hide cards based on region
        regionCards.forEach(card => {
            if (region === 'all' || card.dataset.region === region) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Load More Button
const loadMoreBtn = document.querySelector('.load-more');
let currentItems = 4;

loadMoreBtn.addEventListener('click', () => {
    const newsCards = document.querySelectorAll('.news-card');
    
    for (let i = currentItems; i < currentItems + 4; i++) {
        if (newsCards[i]) {
            newsCards[i].style.display = 'block';
        }
    }
    
    currentItems += 4;
    
    // Hide button when all items are visible
    if (currentItems >= newsCards.length) {
        loadMoreBtn.style.display = 'none';
    }
});

// Initialize - hide extra news cards
document.addEventListener('DOMContentLoaded', () => {
    const newsCards = document.querySelectorAll('.news-card');
    
    for (let i = 4; i < newsCards.length; i++) {
        newsCards[i].style.display = 'none';
    }
    
    if (newsCards.length <= 4) {
        loadMoreBtn.style.display = 'none';
    }
});

// Weather Data (simulated)
function updateWeather() {
    const cities = [
        { name: "Yaoundé", temp: 24, condition: "Partly Cloudy" },
        { name: "Douala", temp: 28, condition: "Rainy" },
        { name: "Bamenda", temp: 20, condition: "Sunny" },
        { name: "Buea", temp: 22, condition: "Cloudy" },
        { name: "Garoua", temp: 32, condition: "Sunny" }
    ];
    
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    
    document.querySelector('.location').textContent = randomCity.name;
    document.querySelector('.temp').textContent = `${randomCity.temp}°C`;
    document.querySelector('.condition').textContent = randomCity.condition;
    
    // Update forecast
    const forecastDays = document.querySelectorAll('.day');
    forecastDays.forEach((day, index) => {
        const dayTemp = randomCity.temp + (Math.floor(Math.random() * 3) - 1);
        day.children[1].textContent = `${dayTemp}°C`;
    });
}

updateWeather();

// Simulate weather update every hour
setInterval(updateWeather, 3600000);

// Newsletter Form Handling
const newsletterForms = document.querySelectorAll('form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        
        if (emailInput.value && emailInput.value.includes('@')) {
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
});