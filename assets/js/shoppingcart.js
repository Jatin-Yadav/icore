const cartBagElements = document.querySelector(".cart-bag");
const totalAmount = document.querySelector(".total-amount");

const updateShoppingCheckoutHTML = function () {
  if (productsInCart.length > 0) {
    let sum = 0;
    productsInCart.forEach((item) => {
      sum += item.price;
    });

    let result = productsInCart.map((product) => {
      return `
      <tr class="cart_item">
      <td class="product-remove">
        <a href="#" class="remove"></a>
      </td>
      <td class="product-thumbnail">
        <a href="#">
          <img
            src="${product.product_image}"
            alt="img"
            class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
          />
        </a>
      </td>
      <td class="product-name" data-title="Product">
        <a href="#" class="title">${product.name}</a>
        <span class="attributes-select attributes-color"
          >${product.attribute_color},</span
        >
        <span class="attributes-select attributes-size"
          >${product.attribute_size}</span
        >
      </td>
      <td class="product-quantity" data-title="Quantity">
        <div class="quantity">
          <div class="control">
            <a
              class="btn-number qtyminus quantity-minus"
              href="#"
              >-</a
            >
            <input
              type="text"
              data-step="1"
              data-min="0"
              value="${product.quantity}"
              title="Qty"
              class="input-qty qty"
              size="4"
            />
            <a
              href="#"
              class="btn-number qtyplus quantity-plus"
              >+</a
            >
          </div>
        </div>
      </td>
      <td class="product-price" data-title="Price">
        <span class="woocommerce-Price-amount amount">
          <span class="woocommerce-Price-currencySymbol">
            $
          </span>
          ${product.basePrice}
        </span>
      </td>
    </tr>
  `;
    });

    cartBagElements.innerHTML = result.join("");
    // cartCount.innerHTML = productsInCart.length;
    totalAmount.innerHTML = `$${sum}`;
    // document.querySelector(".no-product").classList.add("hidden");
    // document.querySelector(".shopcart-description").classList.remove("hidden");
  }
};

updateShoppingCheckoutHTML();
