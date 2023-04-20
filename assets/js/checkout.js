// let productsInCart = JSON.parse(localStorage.getItem("shoppingCart"));
// if (!productsInCart) {
//   productsInCart = [];
// }

const checkOutElements = document.querySelector(".list-product-order");
const totalAmount = document.querySelector(".total-amount");
console.log("total-price", totalAmount);

const countTheTotalAmount = function () {
  let sum = 0;
  productsInCart.forEach((item) => {
    sum += item.price;
  });
  return sum;
};

const updateShoppingCheckoutHTML = function () {
  if (productsInCart.length > 0) {
    let sum = 0;
    productsInCart.forEach((item) => {
      sum += item.price;
    });
    console.log("sum", sum);
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
