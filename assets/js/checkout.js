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

function sendMail() {
  let sum = 0;
  productsInCart.forEach((item) => {
    sum += item.price;
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
    orderdetails: toString(productsInCart[0]),
  };

  const serviceID = "service_v1tj2ws";
  const templateID = "template_9r9otfd";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      console.log(res);
      alert("Your message sent successfully!!");
      location.replace(
        "file:///C:/Users/JATIN%20YADAV/Downloads/Projects/icore/payment_successfull.html"
      );
    })
    .catch((err) => console.log(err));
}
