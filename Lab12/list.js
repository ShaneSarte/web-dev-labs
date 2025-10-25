function generateList() {
  // Step 1: Create an array of fruits
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Watermelon", "Pineapple"];

  // Step 2: Get the <ul> element
  const list = document.getElementById("fruit-list");

  // Step 3: Clear list before adding new items
  list.innerHTML = "";

  // Step 4: Use a for loop to create <li> elements dynamically
  for (let i = 0; i < fruits.length; i++) {
    const listItem = document.createElement("li"); // create <li>
    listItem.innerText = fruits[i]; // set text
    list.appendChild(listItem); // add to <ul>
  }
}
