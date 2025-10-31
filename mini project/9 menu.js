const menuItems = [
  { name: "Coffee", description: "Freshly brewed hot coffee made from premium beans.", price: "₱99" },
  { name: "Tea", description: "Refreshing herbal teas, served hot or iced.", price: "₱79" },
  { name: "Pastries", description: "Delicious croissants, muffins, and scones baked daily.", price: "₱199" },
  { name: "Latte", description: "Rich espresso with steamed milk, topped with foam.", price: "₱199" },
  { name: "Sandwich", description: "Freshly made with ham, cheese, and veggies.", price: "₱299" },
  { name: "Milkshake", description: "Classic creamy milkshake with vanilla or chocolate flavor.", price: "₱199" }
];

const menuList = document.getElementById("menu-list");

menuItems.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("menu-item");

  div.innerHTML = `
    <img src="menu.jpg" alt="${item.name}">
    <h2>${item.name}</h2>
    <p>${item.description}</p>
    <span class="price">${item.price}</span>
    <button onclick="order('${item.name}')">Order Now</button>
  `;

  menuList.appendChild(div);
});

function order(item) {
  alert(`Thank you! You ordered ${item}.`);
}
