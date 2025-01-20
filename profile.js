document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
  
    // Clone the first and last slide for infinite looping
    const firstSlide = slides[0];
    const lastSlide = slides[slides.length - 1];
    const firstClone = firstSlide.cloneNode(true);
    const lastClone = lastSlide.cloneNode(true);
  
    // Add cloned slides to the slider
    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, firstSlide);
  
    const slideWidth = slides[0].clientWidth;
    let offset = slideWidth * (currentIndex + 1);
    slider.style.transform = `translateX(-${offset}px)`;
  
    // Function to move to the next slide
    function moveToNextSlide() {
      if (currentIndex >= slides.length) {
        currentIndex = 0;
        slider.style.transition = 'none';
        offset = slideWidth * (currentIndex + 1);
        slider.style.transform = `translateX(-${offset}px)`;
      } else {
        currentIndex++;
        slider.style.transition = 'transform 0.5s ease';
        offset = slideWidth * (currentIndex + 1);
        slider.style.transform = `translateX(-${offset}px)`;
      }
    }
  
    // Function to move to the previous slide
    function moveToPreviousSlide() {
      if (currentIndex <= 0) {
        currentIndex = slides.length - 1;
        slider.style.transition = 'none';
        offset = slideWidth * (currentIndex + 1);
        slider.style.transform = `translateX(-${offset}px)`;
      } else {
        currentIndex--;
        slider.style.transition = 'transform 0.5s ease';
        offset = slideWidth * (currentIndex + 1);
        slider.style.transform = `translateX(-${offset}px)`;
      }
    }
  
    // Auto-slide every 3 seconds
    setInterval(() => {
      moveToNextSlide();
    }, 3000);
  
    // Smooth scroll to slider when "Explore Now" is clicked
    document.getElementById('exploreBtn').addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById('slider').scrollIntoView({ behavior: 'smooth' });
    });
  });
  document.querySelector('.search-icon').addEventListener('click', function() {
    const searchInput = document.querySelector('.search-input');
    searchInput.classList.toggle('active');
    searchInput.focus(); // Optional: auto-focus the input field
});







// Select tabs
const profileTab57 = document.getElementById("profile-tab-57");
const ordersTab57 = document.getElementById("orders-tab-57");

// Select content sections
const profileContent57 = document.getElementById("profile-content-57");
const ordersContent57 = document.getElementById("orders-content-57");

// "Add New Address" button and form
const addAddressBtn57 = document.getElementById("add-address-btn-57");
const newAddressForm57 = document.getElementById("new-address-form-57");
const addressForm57 = document.getElementById("address-form-57");

// Tab switching logic
profileTab57.addEventListener("click", () => {
  profileTab57.classList.add("active-57");
  ordersTab57.classList.remove("active-57");
  profileContent57.style.display = "block";
  ordersContent57.style.display = "none";
  newAddressForm57.style.display = "none";
});

ordersTab57.addEventListener("click", () => {
  ordersTab57.classList.add("active-57");
  profileTab57.classList.remove("active-57");
  ordersContent57.style.display = "block";
  profileContent57.style.display = "none";
  newAddressForm57.style.display = "none";
});

// Show "Add New Address" form
addAddressBtn57.addEventListener("click", () => {
  newAddressForm57.style.display = "block";
});

// Handle form submission
addressForm57.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("New address saved!");
  addressForm57.reset();
  newAddressForm57.style.display = "none";
});
