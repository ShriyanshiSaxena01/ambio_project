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










// 




// Function to update subtotal for a specific row
function updateRowSubtotal57(row) {
    const price = parseInt(row.querySelector(".cartUnique57-price").innerText.replace("₹", "").replace(",", ""));
    const quantity = parseInt(row.querySelector(".cartUnique57-quantity-input").value);
    const subtotal = price * quantity;
    row.querySelector(".cartUnique57-subtotal").innerText = `₹${subtotal.toLocaleString()}`;
  }
  
  // Function to update the overall cart total
  function updateCartTotals57() {
    let totalSubtotal = 0;
    const rows = document.querySelectorAll("#cartUnique57-body tr");
  
    rows.forEach((row) => {
      const subtotal = parseInt(row.querySelector(".cartUnique57-subtotal").innerText.replace("₹", "").replace(",", ""));
      totalSubtotal += subtotal;
    });
  
    document.getElementById("cartUnique57-total-subtotal").innerText = `₹${totalSubtotal.toLocaleString()}`;
    document.getElementById("cartUnique57-total").innerText = `₹${totalSubtotal.toLocaleString()}`;
  }
  
  // Add event listeners for increment and decrement buttons
  document.querySelectorAll(".cartUnique57-increment").forEach((button) => {
    button.addEventListener("click", (e) => {
      const row = e.target.closest("tr");
      const input = row.querySelector(".cartUnique57-quantity-input");
      input.value = parseInt(input.value) + 1; // Increment quantity
      updateRowSubtotal57(row); // Update row subtotal
      updateCartTotals57(); // Update overall cart totals
    });
  });
  
  document.querySelectorAll(".cartUnique57-decrement").forEach((button) => {
    button.addEventListener("click", (e) => {
      const row = e.target.closest("tr");
      const input = row.querySelector(".cartUnique57-quantity-input");
      if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1; // Decrement quantity
        updateRowSubtotal57(row); // Update row subtotal
        updateCartTotals57(); // Update overall cart totals
      }
    });
  });
  
  // Trigger updates when the quantity input value is changed manually
  document.querySelectorAll(".cartUnique57-quantity-input").forEach((input) => {
    input.addEventListener("input", (e) => {
      const row = e.target.closest("tr");
      const newValue = Math.max(1, parseInt(e.target.value)); // Ensure minimum value is 1
      e.target.value = newValue;
      updateRowSubtotal57(row); // Update row subtotal
      updateCartTotals57(); // Update overall cart totals
    });
  });
  
  // Initial calculation on page load
  updateCartTotals57();
  












  const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let orders = []; // Temporary storage for demo; use a database in production.

app.post('/save-order', (req, res) => {
    const orderData = req.body;
    orders.push(orderData); // Add order to the array.
    console.log("Order saved:", orderData);
    res.status(200).send({ message: "Order saved successfully!" });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));




const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ordersDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const orderSchema = new mongoose.Schema({
    products: Array,
    totalPrice: Number,
    date: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

app.post('/save-order', async (req, res) => {
    const orderData = req.body;
    const order = new Order(orderData);
    await order.save();
    res.status(200).send({ message: "Order saved to database!" });
});





document.querySelector('.cartUnique57-checkout').addEventListener('click', () => {
    const orderData = {
        products: [
            {
                name: "Director Office Chair",
                price: 10999,
                quantity: 1,
                subtotal: 10999,
            },
            {
                name: "Executive Office Chair",
                price: 6509,
                quantity: 2,
                subtotal: 13018,
            },
        ],
        totalPrice: 24017,
    };

    fetch('http://localhost:3000/save-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
});





app.get('/orders', async (req, res) => {
    const orders = await Order.find();
    res.status(200).json(orders);
});

fetch('http://localhost:3000/orders')
    .then(response => response.json())
    .then(orders => console.log('Orders:', orders))
    .catch(error => console.error('Error:', error));


    localStorage.setItem('orders', JSON.stringify(orderData));

// To retrieve:
const savedOrders = JSON.parse(localStorage.getItem('orders'));
console.log(savedOrders);
