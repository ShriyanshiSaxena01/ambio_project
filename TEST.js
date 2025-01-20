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


// Setting up the Three.js scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 800 / 500, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('vrCanvas') });
renderer.setSize(750, 480);

// Loading the texture for the plane
const loader = new THREE.TextureLoader();
loader.load('3d.jpg', function (texture) {
    // Create a plane and add the texture to it
    const geometry = new THREE.PlaneGeometry(4, 3); // Plane dimensions
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Position the camera and the plane
    camera.position.z = 5;

    // Animation loop to rotate the plane
    function animate() {
        requestAnimationFrame(animate);

        // Add rotation for VR effect
        plane.rotation.y += 0.01;

        renderer.render(scene, camera);
    }
    animate();
}, undefined, function (error) {
    console.error('Texture failed to load', error);
});

// Handle window resizing to keep canvas responsive
window.addEventListener('resize', () => {
    const vrBox = document.querySelector('.vr-box');
    const width = vrBox.offsetWidth;
    const height = vrBox.offsetHeight;

    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});




// calander



// Function to toggle the calendar popup
function toggleCalendarPopup() {
  const calendarPopup = document.getElementById('calendar-popup');
  calendarPopup.style.display = 
    calendarPopup.style.display === 'block' ? 'none' : 'block';
}

// Close the popup if clicking outside of it
document.addEventListener('click', function (event) {
  const calendarPopup = document.getElementById('calendar-popup');
  const calendarBtn = document.querySelector('.calendar-btn');
  
  if (calendarPopup && !calendarPopup.contains(event.target) && !calendarBtn.contains(event.target)) {
    calendarPopup.style.display = 'none';
  }
});


// increse and decrese

document.addEventListener("DOMContentLoaded", () => {
  const decreaseButton = document.querySelector(".quantity-selector .decrease");
  const increaseButton = document.querySelector(".quantity-selector .increase");
  const quantityInput = document.querySelector(".quantity-selector input");

  // Decrease the quantity
  decreaseButton.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.value, 10);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });

  // Increase the quantity
  increaseButton.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.value, 10);
    quantityInput.value = currentValue + 1;
  });

  // Ensure only valid numbers are entered
  quantityInput.addEventListener("input", () => {
    let value = parseInt(quantityInput.value, 10);
    if (isNaN(value) || value < 1) {
      quantityInput.value = 1; // Reset to minimum value if invalid
    }
  });
});
