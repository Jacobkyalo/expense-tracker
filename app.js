const form = document.getElementById("form");
const error = document.getElementById("error");
const btn = document.getElementById("btn");
const nameInput = document.getElementById("name");
const dateInput = document.getElementById("date");
const amount = document.getElementById("amount");
const table = document.getElementById("table");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nameInput.value === "" || dateInput.value === "" || amount.value === "") {
    error.innerHTML = "All the fields are required!";
    error.style.color = "red";
    setTimeout(() => error.remove(), 2000);
  } else {
    let tr = document.createElement("tr");
    let nm = tr.appendChild(document.createElement("td"));
    let dt = tr.appendChild(document.createElement("td"));
    let am = tr.appendChild(document.createElement("td"));
    let button = tr.appendChild(document.createElement("button"));
    button.appendChild(document.createTextNode("Delete"));
    button.classList.add("delete");

    let buyBtn = tr.appendChild(document.createElement("button"));
    buyBtn.appendChild(document.createTextNode("Buy"));
    buyBtn.classList.add("buy");

    tr.classList.add("tr");

    nm.innerHTML = nameInput.value;
    dt.innerHTML = dateInput.value;
    am.innerHTML = `$ ${amount.value}`;

    table.appendChild(tr);

    nameInput.value = "";
    dateInput.ariaValueMax = "";
    amount.value = "";
  }
});

table.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    let expense = e.target.parentElement;
    table.removeChild(expense);
  }
});

table.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("buy")) {
    e.target.innerHTML = "Bought";
  }
});
