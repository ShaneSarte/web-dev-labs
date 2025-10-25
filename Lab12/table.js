const products = [
  { name: "Apple", quantity: 10, price: "$1.00" },
  { name: "Banana", quantity: 8, price: "$0.80" },
  { name: "Mango", quantity: 5, price: "$1.50" }
];

const tableBody = document.querySelector("#productTable tbody");

for (let i = 0; i < products.length; i++) {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  const quantityCell = document.createElement("td");
  const priceCell = document.createElement("td");

  nameCell.innerText = products[i].name;
  quantityCell.innerText = products[i].quantity;
  priceCell.innerText = products[i].price;

  row.appendChild(nameCell);
  row.appendChild(quantityCell);
  row.appendChild(priceCell);

  tableBody.appendChild(row);
}
