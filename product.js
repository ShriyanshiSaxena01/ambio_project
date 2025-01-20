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





document.addEventListener('DOMContentLoaded', () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  // Create the renderer and set its size
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("vrCanvas") });
  renderer.setSize(window.innerWidth, window.innerHeight);  // Fullscreen
  
  // Video element and texture
  const video = document.getElementById("vrVideo");
  video.play(); // Start video

  const videoTexture = new THREE.VideoTexture(video);
  videoTexture.minFilter = THREE.LinearFilter;
  videoTexture.magFilter = THREE.LinearFilter;
  videoTexture.format = THREE.RGBAFormat;

  // Create a plane to display the video texture, making the video smaller
  const geometry = new THREE.PlaneGeometry(3, 3.35); // Smaller video size (4:2.25 aspect ratio, for example)
  const material = new THREE.MeshBasicMaterial({ map: videoTexture });
  const videoPlane = new THREE.Mesh(geometry, material);

  // Position the video in the center of the scene
  videoPlane.position.set(0, 0, 0); // This places the video at the origin (center)

  // Add the video plane to the scene
  scene.add(videoPlane);

  // Camera positioning
  camera.position.z = 5;

  // Animation loop to render the scene
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate(); // Start the animation

  // Explore Button scroll behavior
  document.getElementById('exploreBtn').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('vrCanvas').scrollIntoView({ behavior: 'smooth' });
  });

  // Popup functions
  function openPopup(imageSrc) {
    let popup = document.getElementById("popup");
    const popupImage = document.getElementById("popup-image");
    popupImage.src = imageSrc;
    popup.style.display = "flex";
  }

  function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
  }

  // Heart toggle (example)
  function toggleHeart(element) {
    element.classList.toggle('active');
  }

  // Filter button toggle (example)
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
    });
  });
});




function redirectTo(page) {
  window.location.href = page;
}