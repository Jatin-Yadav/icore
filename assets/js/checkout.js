// let productsInCart = JSON.parse(localStorage.getItem("shoppingCart"));
// if (!productsInCart) {
//   productsInCart = [];
// }

const checkOutElements = document.querySelector(".list-product-order");
const totalAmount = document.querySelector(".total-amount");

const updateShoppingCheckoutHTML = function () {
  if (productsInCart.length > 0) {
    let sum = 0;
    productsInCart.forEach((item) => {
      sum += item.price;
    });

    let result = productsInCart.map((product) => {
      return `
      <li class="product-item-order">
      <div class="product-thumb">
        <a href="#">
          <img src="${product.product_image}" alt="img" />
        </a>
      </div>
      <div class="product-order-inner">
        <h5 class="product-name">
          <a href="#">${product.name}</a>
        </h5>
        <span class="attributes-select attributes-color"
          >${product.attribute_color},</span
        >
        <span class="attributes-select attributes-size"
          >${product.attribute_size}</span
        >
        <div class="price">
          $${product.basePrice}
          <span class="count">x${product.quantity}</span>
        </div>
      </div>
    </li>
  `;
    });

    checkOutElements.innerHTML = result.join("");
    // cartCount.innerHTML = productsInCart.length;
    totalAmount.innerHTML = `$${sum}`;
    // document.querySelector(".no-product").classList.add("hidden");
    // document.querySelector(".shopcart-description").classList.remove("hidden");
  }
};

updateShoppingCheckoutHTML();

$("form").on("submit", function (e) {
  //ajax call here
  sendMail();
  //stop form submission
  e.preventDefault();
});

function sendMail() {
  let sum = 0;
  productsInCart.forEach((item) => {
    sum += item.price;
  });

  let productResult = productsInCart.map((product) => {
    return `
      <li class="product-item-order">
      <div class="product-order-inner">
        <h3 class="product-name">Product Name: ${product.name}</h3>
        <span class="attributes-select attributes-color"
          >${product.attribute_color},</span
        >
        <span class="attributes-select attributes-size"
          >${product.attribute_size}</span
        >
        <h4 class="price">Price :
          $${product.basePrice}
          <span class="count">(${product.quantity})</span>
        </h4>
      </div>
    </li>
  `;
  });
  var params = {
    orderfrom:
      document.getElementById("fname").value +
      " " +
      document.getElementById("lname").value,
    country: document.getElementById("country").value,
    state: document.getElementById("state").value,
    city: document.getElementById("city").value,
    zip: document.getElementById("zip").value,
    address: document.getElementById("address").value,
    totalprice: `$${sum}`,
    products: productResult.join(""),
  };

  const serviceID = "service_v1tj2ws";
  const templateID = "template_9r9otfd";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      console.log(res);
      alert("Your Order Placed Successfully!!");
      document.getElementById("checkout_successfully").click();
    })
    .catch((err) => console.log(err));
}
