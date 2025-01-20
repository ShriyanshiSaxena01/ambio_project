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
  
    // // Smooth scroll to slider when "Explore Now" is clicked
    // document.getElementById('exploreBtn').addEventListener('click', (event) => {
    //   event.preventDefault();
    //   document.getElementById('slider').scrollIntoView({ behavior: 'smooth' });
    // });
  });
  document.querySelector('.search-icon').addEventListener('click', function() {
    const searchInput = document.querySelector('.search-input');
    searchInput.classList.toggle('active');
    searchInput.focus(); // Optional: auto-focus the input field
});



const circleContainer = document.querySelector('.circle-container');

// Function to create a circle element
function createCircle(id, imageSrc, label, subtext, link) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.id = id;

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = label;

    const textLabel = document.createElement('div');
    textLabel.classList.add('circle-text');
    textLabel.innerHTML = `<p>${label}</p><p>${subtext}</p>`;

    circle.appendChild(img);
    circle.appendChild(textLabel);

    circleContainer.appendChild(circle);
}

// Ensure only 10 circles are created
for (let i = 0; i <= 10; i++) {
    createCircle(`circle${i}`, `circle${i % 2 + 1}.png`, `Label ${i}`, 'Subtext', `#link${i}`);
    break;
}




//  mkmkmknjknjkn  

document.addEventListener('DOMContentLoaded', () => {
  const categories = document.querySelectorAll('.categories25 span');
  const productsGrid = document.querySelector('.products-grid25');

  const products = {
      "Bed Room": [
          { name: "Bed Frame", price: "₹25,000", img: "bed.jpg", link: "#" },
          { name: "Dresser", price: "₹7,500", img: "bed1.jpg", link: "#" },
          { name: "Nightstand", price: "₹3,000", img: "bed2.jpg", link: "#" },
          { name: "Wardrobe", price: "₹15,000", img: "bed3.jpg", link: "#" },
          { name: "Mirror", price: "₹2,000", img: "bed4.jpg", link: "#" },
          { name: "Bedside Lamp", price: "₹1,500", img: "bed.jpg5", link: "#" }
      ],
      "Living Room": [
          { name: "Tufted Back Sofa", price: "₹15,999", img: "living1.png", link: "#" },
          { name: "Curved Sofa with Cushions", price: "₹21,999", img: "living2.png", link: "#" },
          { name: "Living Room Sofa Chair", price: "₹8,000", img: "living3.png", link: "#" },
          { name: "Coffee Table", price: "₹3,500", img: "living4.png", link: "#" },
          { name: "TV Stand", price: "₹5,000", img: "living5.png", link: "#" },
          { name: "Gamer chair", price: "₹26,000", img: "mainpro.png", link: "prod.html" }
      ],
      "Dining Room": [
          { name: "Dining Table", price: "₹10,000", img: "circle2.png", link: "#" },
          { name: "Dining Chairs", price: "₹5,000", img: "circle2.png", link: "#" },
          { name: "Sideboard", price: "₹12,000", img: "circle2.png", link: "#" },
          { name: "Bar Stools", price: "₹4,500", img: "circle2.png", link: "#" },
          { name: "Cabinet", price: "₹8,000", img: "circle2.png", link: "#" },
          { name: "Table Runner", price: "₹1,000", img: "circle2.png", link: "#" }
      ],
      "Outdoor": [
          { name: "Patio Chair", price: "₹3,000", img: "circle1.png", link: "#" },
          { name: "Garden Sofa", price: "₹9,500", img: "circle1.png", link: "#" },
          { name: "Umbrella", price: "₹4,000", img: "circle1.png", link: "#" },
          { name: "Swing Chair", price: "₹6,000", img: "circle1.png", link: "#" },
          { name: "Hammock", price: "₹3,500", img: "circle1.png", link: "#" },
          { name: "Fire Pit", price: "₹7,000", img: "circle1.png", link: "#" }
      ],
      "Indoor": [
          { name: "Indoor Plant", price: "₹800", img: "circle2.png", link: "#" },
          { name: "Table Lamp", price: "₹1,500", img: "circle2.png", link: "#" },
          { name: "Wall Clock", price: "₹700", img: "circle2.png", link: "#" },
          { name: "Bookshelf", price: "₹2,500", img: "circle2.png", link: "#" },
          { name: "Carpet", price: "₹2,200", img: "circle2.png", link: "#" },
          { name: "Vase", price: "₹500", img: "circle2.png", link: "#" }
      ]
  };

  categories.forEach(category => {
      category.addEventListener('click', () => {
          document.querySelector('.active25').classList.remove('active25');
          category.classList.add('active25');
          updateProductsGrid(category.textContent);
      });
  });

  function updateProductsGrid(category) {
    productsGrid.innerHTML = ''; // Clear existing products
    products[category].slice(0, 6).forEach(product => { // Limit to 6 items
        const productCard = document.createElement('div');
        productCard.classList.add('product-card25');
        productCard.innerHTML = `
            <i class="fas fa-heart heart-icon25" onclick="toggleHeart(this)"></i>
            <img src="${product.img}" alt="${product.name}">
            <div class="product-info25">
                <button onclick="location.href='${product.link}'">
                    ${product.name} - ${product.price}
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
  }

  function toggleHeart(icon) {
    icon.classList.toggle('active'); // Toggle 'active' class
    console.log(icon.classList); // Log to verify class changes
  }
  

  // Load default category (Living Room) on page load
  updateProductsGrid("Living Room");
});

// neww

const testimonialContainer = document.querySelector('.testimonial-container');

let scrollInterval = setInterval(() => {
  testimonialContainer.scrollBy({ left: 300, behavior: 'smooth' });
}, 3000);

testimonialContainer.addEventListener('mouseover', () => {
  clearInterval(scrollInterval); // Stop scrolling when mouse hovers over the container
});

testimonialContainer.addEventListener('mouseout', () => {
  scrollInterval = setInterval(() => {
    testimonialContainer.scrollBy({ left: 300, behavior: 'smooth' });
  }, 3000); // Resume scrolling when mouse leaves the container
});



// newww

function toggleAnswer(element) {
  const faqItem = element.parentElement;
  faqItem.classList.toggle('active');
}




// login
const popupWrapper = document.getElementById('popupWrapper');
const exploreBtn = document.getElementById('exploreBtn');
const closePopup = document.getElementById('closePopup');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Show Popup
exploreBtn.addEventListener('click', () => {
  popupWrapper.style.display = 'flex';
});

// Close Popup
closePopup.addEventListener('click', () => {
  popupWrapper.style.display = 'none';
});

// Tab Switcher
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to the clicked button and corresponding tab
    button.classList.add('active');
    document.getElementById(button.dataset.target).classList.add('active');
  });
});

// Form Validation with Focus
const loginForm = document.querySelector('#loginTab form');
const signInForm = document.querySelector('#signInTab form');

loginForm.addEventListener('submit', function(event) {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    event.preventDefault(); // Prevent form submission

    // Show alert
    alert('Please fill in both fields.');

    // Focus on the first empty field
    if (!email) {
      document.getElementById('loginEmail').focus();
    } else if (!password) {
      document.getElementById('loginPassword').focus();
    }
  }
});

signInForm.addEventListener('submit', function(event) {
  const email = document.getElementById('signInEmail').value;
  const password = document.getElementById('signInPassword').value;

  if (!email || !password) {
    event.preventDefault(); // Prevent form submission

    // Show alert
    alert('Please fill in both fields.');

    // Focus on the first empty field
    if (!email) {
      document.getElementById('signInEmail').focus();
    } else if (!password) {
      document.getElementById('signInPassword').focus();
    }
  }
});



// Select all heart icons
const heartIcons = document.querySelectorAll('.heart-icon25');

// Add click event listener to each heart icon
heartIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    // Toggle the 'active' class to change color
    icon.classList.toggle('active');
  });
});

function redirectToDeal() {
  window.location.href = "categories.html"; // Replace with the desired URL
}

