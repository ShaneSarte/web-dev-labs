// Array of menu items
const menuItems = [
  { name: "Coffee", description: "Freshly brewed hot coffee made from premium beans.", price: 99 },
  { name: "Tea", description: "Refreshing herbal teas, served hot or iced.", price: 79 },
  { name: "Pastries", description: "Delicious croissants, muffins, and scones baked daily.", price: 199 },
  { name: "Latte", description: "Rich espresso with steamed milk, topped with foam.", price: 199 },
  { name: "Sandwich", description: "Freshly made with ham, cheese, and veggies.", price: 299 },
  { name: "Milkshake", description: "Classic creamy milkshake with vanilla or chocolate flavor.", price: 199 }
];

// Get container
const menuList = document.getElementById("menu-list");

// Dynamically create and insert menu items
menuItems.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("menu-item");

  div.innerHTML = `
    <h2>${item.name}</h2>
    <p>${item.description}</p>
    <span class="price">₱${item.price}</span>
    <button onclick="order('${item.name}', ${item.price})">Order Now</button>
  `;

  menuList.appendChild(div);
});

// Order function
function order(item, price) {
  alert(`Thank you! You ordered ${item} for ₱${price}.`);
}
