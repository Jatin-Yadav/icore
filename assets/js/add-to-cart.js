let productsInCart = JSON.parse(localStorage.getItem("shoppingCart"));
if (!productsInCart) {
  productsInCart = [];
}
const cartElements = document.querySelector(".minicart-items");
const noCartElements = document.querySelector(".zentimo-submenu");
const cartCount = document.querySelector(".cart-count");
const cartFooterCount = document.querySelector(".cart-footer-count");
const cartAmount = document.querySelector(".Price-amount");
const products = document.querySelectorAll(".product-inner");

const countTheSumPrice = function () {
  let sum = 0;
  productsInCart.forEach((item) => {
    sum += item.price;
  });
  return sum;
};
const updateShoppingCartHTML = function () {
  localStorage.setItem("shoppingCart", JSON.stringify(productsInCart));
  if (productsInCart.length > 0) {
    let result = productsInCart.map((product) => {
      return `
      <li class="product-cart mini_cart_item">
                              <a href="#" class="product-media">
                                <img
                                  src="${product.product_image}"
                                  alt="img"
                                />
                              </a>
                              <div class="product-details">
                                <h5 class="product-name">
                                  <a href="#">${product.name}</a>
                                </h5>
                                <div class="variations">
                                  <span class="attribute_color">
                                    <a href="#">${product.attribute_color}</a>
                                  </span>
                                  ,
                                  <span class="attribute_size">
                                    <a href="#">${product.attribute_size}</a>
                                  </span>
                                </div>
                                <span class="product-price">
                                  <span class="price">
                                    <span>$${product.basePrice}</span>
                                  </span>
                                </span>
                                <span class="product-quantity"> (x${product.quantity}) </span>
                                <div class="product-remove">
                                  <a href="#"
                                    ><i class="fa fa-trash-o" aria-hidden="true"></i
                                  ></a>
                                </div>
                              </div>
                            </li>
        `;
    });

    cartElements.innerHTML = result.join("");
    cartCount.innerHTML = productsInCart.length;
    cartFooterCount.innerHTML = productsInCart.length;
    cartAmount.innerHTML = `$${countTheSumPrice()}`;
    document.querySelector(".no-product").classList.add("hidden");
    document.querySelector(".shopcart-description").classList.remove("hidden");
  } else {
    document.querySelector(".shopcart-description").classList.add("hidden");
    document.querySelector(".no-product").classList.remove("hidden");
  }
};

function updateProductsInCart(product) {
  for (let i = 0; i < productsInCart.length; i++) {
    if (productsInCart[i].id == product.id) {
      productsInCart[i].quantity += 1;
      productsInCart[i].price =
        productsInCart[i].basePrice * productsInCart[i].quantity;
      alert(`${product.name} updated to the cart`);
      return;
    }
  }
  productsInCart.push(product);
  alert(`${product.name} added to the cart`);
}

let clickedProductDetails;
products.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("single_add_to_cart_button")) {
      const productID = e.target.dataset.productId;
      const productName = item
        .querySelector(".product-name")
        .querySelector("a").innerHTML;
      const productPrice = item
        .querySelector(".price")
        .querySelector("ins").innerHTML;
      const productImage = item.querySelector("img").src;
      let product = {
        id: productID,
        name: productName,
        attribute_color: "Black",
        attribute_size: "",
        price: Number(productPrice.replace("$", "")),
        basePrice: Number(productPrice.replace("$", "")),
        quantity: 1,
        product_image: productImage,
      };
      updateProductsInCart(product);
      updateShoppingCartHTML();
    }
  });
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("product-details")) {
      const productID = e.target.dataset.productId;
      const productName = item
        .querySelector(".product-name")
        .querySelector("a").innerHTML;
      const productPrice = item
        .querySelector(".price")
        .querySelector("ins").innerHTML;
      const productImage = item.querySelector("img").src;
      let product = {
        id: productID,
        name: productName,
        attribute_color: "Black",
        attribute_size: "",
        price: Number(productPrice.replace("$", "")),
        basePrice: Number(productPrice.replace("$", "")),
        quantity: 1,
        product_image: productImage,
      };
      localStorage.setItem("clickedProduct", JSON.stringify(product));

      // clickedProductDetails = product;
      // console.log("log from line 129", product);
      // updateProductsInCart(product);
      // updateShoppingCartHTML();
    }
  });
});

updateShoppingCartHTML();
