// Sample products data
const products = [
    { id: 1, name: 'Smartphone', price: 20000, category: 'electronics', img: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/b2d3f2ac-4512-45a2-8122-aea7a9d4c223._CR0,0,1200,628_SX810_CB1169409_QL70_.jpg' },
    { id: 2, name: 'Laptop', price: 50000, category: 'electronics', img: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/1c24d72c-e022-46e9-9ee7-6412a0b1f3f5._CR0,0,1200,628_SX810_CB1169409_QL70_.png' },
    { id: 3, name: 'T-shirt', price: 500, category: 'clothing', img: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/9c54754b-99b2-4e02-b15b-6c86c70ca5cb._CR28,0,1200,628_SX810_CB1169409_QL70_.jpeg' },
    { id: 4, name: 'Shoes', price: 1500, category: 'clothing', img: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/1d50ef3d-47cd-4ddd-824c-cda532f9a015._CR0,0,1200,628_SX810_CB1169409_QL70_.jpg' },
    { id: 5, name: 'Sofa', price: 20000, category: 'home', img: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/2fcf0628-39af-4aae-81df-b07f191f93f6._CR0,0,1200,628_SX810_CB1169409_QL70_.jpg' },
    { id: 6, name: 'Dining Table', price: 10000, category: 'home', img: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ba2df539-49e9-4b28-a3ad-35f8f7e3de49._CR0,0,1200,628_SX810_CB1169409_QL70_.jpeg' },
    { id: 7, name: 'Smart Watch', price: 7000, category: 'electronics', img: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/aa7f8543-abec-400f-9c5f-38f6378e7d42._CR0,0,1200,628_SX810_CB1169409_QL70_.jpg' },
    { id: 8, name: 'Camera', price: 25000, category: 'electronics', img: 'https://m.media-amazon.com/images/I/51dYDW1sMtL._AC_SR250,250_QL65_.jpg' },
    { id: 9, name: 'Jeans', price: 1200, category: 'clothing', img: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/e6376172-16f5-4143-85e4-f918bac22cb7._CR70,0,1200,628_SX810_CB1169409_QL70_.jpg' },
    { id: 10, name: 'Jacket', price: 3000, category: 'clothing', img: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/8c4882d6-0daa-43ca-b5a9-1bcfa6965895._CR0,0,1200,629_SX810_CB1169409_QL70_.jpg' },
    { id: 11, name: 'Refrigerator', price: 25000, category: 'home', img: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/4fe1f87b-dfac-4254-8034-eead080c0f09._CR0,0,1200,628_SX810_CB1169409_QL70_.jpg' },
    { id: 12, name: 'Washing Machine', price: 15000, category: 'home', img: 'https://m.media-amazon.com/images/I/71Nn52xi20L._AC_UY327_FMwebp_QL65_.jpg' },
    { id: 13, name: 'Headphones', price: 3000, category: 'electronics', img: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ab6502d6-71e3-4dfd-b7ef-8858990ff232._CR0,0,1200,628_SX810_CB1169409_QL70_.jpg' },
    { id: 14, name: 'Gaming Console', price: 25000, category: 'electronics', img: 'https://m.media-amazon.com/images/I/41DbQt3uCnL._AC_SR360,240_CB1169409_QL70_.jpg' },
    { id: 15, name: 'Bed', price: 12000, category: 'home', img: 'https://m.media-amazon.com/images/I/914WOlSPgfL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 16, name: 'Towel Set', price: 800, category: 'home', img: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/4ce13c71-0630-456a-98af-97e1e7dde537._CR0,57,1920,1006_SX810_CB1169409_QL70_.jpg' },
    { id: 17, name: 'Sneakers', price: 2500, category: 'clothing', img: 'https://m.media-amazon.com/images/I/610Gt6s9HsL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 18, name: 'Blender', price: 3500, category: 'home', img: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/77c1a965-2851-4bb6-bd84-1037c6f9f852._CR0,0,1200,628_SX810_CB1169409_QL70_.png' },
    { id: 19, name: 'Bag', price: 1500, category: 'clothing', img: 'https://m.media-amazon.com/images/I/81rDE6gGxnL._AC_SR360,240_CB1169409_QL70_.jpg' },
    { id: 20, name: 'Smart TV', price: 35000, category: 'electronics', img: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/c16a572c-b6fe-4ab7-bc54-35aae03aa2b5._CR0,0,1200,628_SX810_CB1169409_QL70_.jpg' }
  ];
  
  let cart = [];
  
  // Display products
  function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productCard);
    });
  }
  
  // Add to cart
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartCount();
    alert(`${product.name} added to cart!`);
  }
  
  // Update cart count
  function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.length;
  }
  
  // Show cart popup
  document.getElementById('cartButton').addEventListener('click', () => {
    const cartPopup = document.getElementById('cartPopup');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      const cartItem = document.createElement('li');
      cartItem.textContent = `${item.name} - ₹${item.price}`;
      cartItems.appendChild(cartItem);
      total += item.price;
    });
    
    cartTotal.textContent = total;
    cartPopup.style.display = 'block';
  });
  
  // Close cart popup
  document.getElementById('closeCartButton').addEventListener('click', () => {
    document.getElementById('cartPopup').style.display = 'none';
  });
  
  displayProducts(products);
  
  