const products = [
  { name: "Apple", quantity: 10, price: 25.00 },
  { name: "Banana", quantity: 8, price: 15.00 },
  { name: "Mango", quantity: 5, price: 30.00 }
];

const tableBody = document.querySelector("#productTable tbody");
const totalPriceCell = document.getElementById("totalPrice");

let total = 0;

for (let i = 0; i < products.length; i++) {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  const quantityCell = document.createElement("td");
  const priceCell = document.createElement("td");

  nameCell.innerText = products[i].name;
  quantityCell.innerText = products[i].quantity;
  priceCell.innerText = `₱${products[i].price.toFixed(2)}`;

  total += products[i].price * products[i].quantity;

  row.appendChild(nameCell);
  row.appendChild(quantityCell);
  row.appendChild(priceCell);

  tableBody.appendChild(row);
}

totalPriceCell.innerHTML = `<strong>₱${total.toFixed(2)}</strong>`;
