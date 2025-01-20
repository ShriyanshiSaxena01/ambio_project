document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.categories25 span');
    const productsGrid = document.querySelector('.products-grid25');

    const products = {
        "Bed Room": [
            { name: "Bed Frame", price: "₹25,000", img: "bedroom1.jpg", link: "#" },
            { name: "Dresser", price: "₹7,500", img: "bedroom2.jpg", link: "#" },
            { name: "Nightstand", price: "₹3,000", img: "bedroom3.jpg", link: "#" },
            { name: "Wardrobe", price: "₹15,000", img: "bedroom4.jpg", link: "#" },
            { name: "Mirror", price: "₹2,500", img: "bedroom5.jpg", link: "#" },
            { name: "Bedside Lamp", price: "₹1,000", img: "bedroom6.jpg", link: "#" },
            { name: "Closet Organizer", price: "₹4,000", img: "bedroom7.jpg", link: "#" },
            { name: "Headboard", price: "₹6,500", img: "bedroom8.jpg", link: "#" },
            { name: "Linen Set", price: "₹1,200", img: "bedroom9.jpg", link: "#" },
            { name: "Pillows", price: "₹800", img: "bedroom10.jpg", link: "#" },
            { name: "Area Rug", price: "₹2,200", img: "bedroom11.jpg", link: "#" },
            { name: "Curtains", price: "₹1,500", img: "bedroom12.jpg", link: "#" },
            { name: "Bookshelf", price: "₹2,500", img: "bedroom13.jpg", link: "#" },
            { name: "Desk", price: "₹5,000", img: "bedroom14.jpg", link: "#" },
            { name: "Chair", price: "₹2,000", img: "bedroom15.jpg", link: "#" },
            { name: "Wall Art", price: "₹1,800", img: "bedroom16.jpg", link: "#" },
            { name: "Decorative Plants", price: "₹700", img: "bedroom17.jpg", link: "#" },
            { name: "Alarm Clock", price: "₹600", img: "bedroom18.jpg", link: "#" }
        ],
        "Living Room": [
            { name: "Tufted Back Sofa", price: "₹15,999", img: "sofa1.jpg", link: "#" },
            { name: "Curved Sofa with Cushions", price: "₹21,999", img: "sofa2.jpg", link: "#" },
            { name: "Living Room Sofa Chair", price: "₹8,000", img: "sofa3.jpg", link: "#" },
            { name: "Coffee Table", price: "₹3,500", img: "sofa4.jpg", link: "#" },
            { name: "Floor Lamp", price: "₹2,000", img: "sofa5.jpg", link: "#" },
            { name: "TV Stand", price: "₹9,000", img: "sofa6.jpg", link: "#" },
            { name: "Area Rug", price: "₹3,000", img: "sofa7.jpg", link: "#" },
            { name: "Curtains", price: "₹1,500", img: "sofa8.jpg", link: "#" },
            { name: "Wall Art", price: "₹2,000", img: "sofa9.jpg", link: "#" },
            { name: "Bookshelf", price: "₹4,000", img: "sofa10.jpg", link: "#" },
            { name: "Side Table", price: "₹1,200", img: "sofa11.jpg", link: "#" },
            { name: "Recliner", price: "₹7,500", img: "sofa12.jpg", link: "#" },
            { name: "Accent Chair", price: "₹6,000", img: "sofa13.jpg", link: "#" },
            { name: "Pouf", price: "₹1,000", img: "sofa14.jpg", link: "#" },
            { name: "Decorative Pillows", price: "₹800", img: "sofa15.jpg", link: "#" },
            { name: "Indoor Plant", price: "₹500", img: "sofa16.jpg", link: "#" },
            { name: "Clock", price: "₹1,000", img: "sofa17.jpg", link: "#" },
            { name: "Candles", price: "₹300", img: "sofa18.jpg", link: "#" }
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
        productsGrid.innerHTML = '';
        const selectedProducts = products[category];

        selectedProducts.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }

    function createProductCard(product) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card25');
        productCard.innerHTML = `
            <
