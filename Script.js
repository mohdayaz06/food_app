function order(item) {
  let list = document.getElementById("order-list");
  let li = document.createElement("li");
  li.textContent = item + " added to cart 🍴";
  list.appendChild(li);
}