// Registration

let regFormName = document.querySelector("#name");
let regFormEmail = document.querySelector("#email");
let regFormPass = document.querySelector("#password");
let regFormBtn = document.querySelector(".register");
let errMessage = document.querySelector(".error");
if (regFormBtn) {
  regFormBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (regFormEmail.value && regFormPass.value && regFormName.value) {
      localStorage.setItem(
        "register",
        JSON.stringify({
          name: regFormName.value,
          email: regFormEmail.value,
          password: regFormPass.value,
        })
      );
    } else {
      errMessage.style.display = "block";
    }
    if (localStorage.getItem("register")) window.location.href = "login.html";
  });
}

// Login
let logFormEmail = document.querySelector("#email");
let logFormPass = document.querySelector("#password");
let logFormBtn = document.querySelector(".login");
let logData, userData;

if (logFormBtn) {
  window.addEventListener("load", function () {
    logData = localStorage.getItem("register");
    if (!logData) {
      errMessage.style.display = "block";
      errMessage.innerText = "You need to register first!";
    }
    userData = JSON.parse(logData);
  });
  logFormBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (
      userData.email === logFormEmail.value &&
      userData.password === logFormPass.value
    ) {
      window.location.href = "index.html";
    } else {
      errMessage.style.display = "block";
    }
  });
}

// index page
if (!localStorage.getItem("register")) {
  window.location.href = "register.html";
}

let products = document.querySelectorAll(".product__item");
let productsCounter = document.querySelector(".header__cart p span");
let productsPop = document.querySelector(".header__cart p");
let productsArr = [];
let checkout = document.querySelector(".checkout");
products.forEach((elm, index) => {
  let count = 1;
  let productName = elm.querySelector(".product__item-name");
  let productPrice = elm.querySelector(".product__item-price");
  let productQuantity = elm.querySelector(".product__item-action p");
  let productNameData = productName.getAttribute("data-name");
  let productPriceData = productPrice.getAttribute("data-price");
  // let productQuantityData = productQuantity.innerText
  let addOne = elm.querySelector(".add");
  let removeOne = elm.querySelector(".remove");
  let buyBtn = elm.querySelector(".addtocart");
  addOne.addEventListener("click", function () {
    productQuantity.innerText = count += 1;
  });
  removeOne.addEventListener("click", function () {
    if (count <= 1) {
      return;
    }
    productQuantity.innerText = count -= 1;
  });

  buyBtn.addEventListener("click", function () {
    productsArr.push({
      id: index + 1,
      name: productNameData,
      price: productPriceData,
      quantity: productQuantity.innerText,
      total: Number(productPriceData) * Number(productQuantity.innerText),
    });
    count = 1;
    productsCounter.innerText = productsArr.length;
    console.log(productsArr);
  });
});
let cartItems = document.querySelector("#products");
let cartPopup = document.querySelector(".products");
if (productsPop) {
  productsPop.addEventListener("click", function () {
    cartPopup.classList.toggle("visible");
    addItemsToPopup();
  });
}

function addItemsToPopup() {
  if (productsArr.length > 0) {
    let p = document.querySelector(".products p");
    p.style.display = "none";
    checkout.style.display = "block";
  }

  productsArr.forEach((elm) => {
    let li = document.createElement("li");
    let div = document.createElement("div");
    div.setAttribute("class", "popup__list-item");
    let productListName = document.createElement("span");
    let productListQuantity = document.createElement("span");
    let productItemsTotal = document.createElement("span");

    productListName.innerText = elm.name;
    productListQuantity.innerText = elm.quantity + "x" + elm.price;
    productItemsTotal.innerText = elm.quantity * elm.price + "$";
    div.append(productListName);
    div.append(productListQuantity);
    div.append(productItemsTotal);
    li.appendChild(div);
    cartItems.appendChild(li);
  });
}

if (checkout) {
  checkout.addEventListener("click", function () {
    localStorage.setItem("products", JSON.stringify(productsArr));

    window.location.href = "cart.html";
  });
}

//cart
function checkOut() {
  let productsFromStorage;

  productsFromStorage = localStorage.getItem("products");
  let productsItems = JSON.parse(productsFromStorage);

  productsCounter.innerText = productsItems.length;
  let cart = document.querySelector(".cart ul");
  productsItems.forEach((elm) => {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerHTML = `<span>${elm.name}</span><span>${elm.quantity}</span> <span>${elm.price}</span> <span>${elm.total}</span>`;
    li.append(p);
    cart.append(li);
  });
  const sumall = productsItems
    .map((item) => item.total)
    .reduce((prev, curr) => prev + curr);
  let cartTotal = document.querySelector(".total");
  cartTotal.innerText =
    productsItems.length + " products and sumarry is " + sumall + "$";
}

let payBtn = document.querySelector(".pay");

if (payBtn) {
  payBtn.addEventListener("click", function () {
    window.location.href = "index.html";
    localStorage.removeItem("products");
  });
}
if (window.location.href === "http://127.0.0.1:5500/cart.html") {
  checkOut();
}
