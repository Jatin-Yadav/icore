const productDesc = document.querySelector(".product-descriptions");
const productInfo = document.querySelector(".product-info");
const productHighLights = document.querySelector(".product-high-lights");
const availabilityStatus = document.querySelector(".availability-status");
const countStar = document.querySelector(".count-star");
const unitPrice = document.querySelector(".unit-price");
const productTitle = document.querySelector(".product-title");
const trailItem = document.querySelector(".trail-end");
const productId = document.querySelector(".product-id");
const imageList = document.querySelector(".image-list");
const imagePreviewContainer = document.querySelector(
  ".image_preview_container"
);

let clickedProduct = JSON.parse(localStorage.getItem("clickedProduct"));
if (!clickedProduct) {
  clickedProduct = {
    productid: "1",
    productName: "Lenovo Yoga C640 (13”)",
    ratting: 7,
    availability: "inStock",
    price: 859,
    highlights: ["16 GB DDR4 2400MHz", "Imported", "Art.No. 06-7680"],
    descriptions: [
      {
        title: "Up to 13 hours of battery life",
        description:
          "Powered by 10th Gen Intel® Core™ processors, the Yoga C640 gives you an unbelievably responsive computer experience. Featuring built-in intelligent performance features that anticipate your needs, this laptop offers a more intuitive and personalized experience. With advanced connectivity, stream smoother and connect to as many smart devices in your home as you want, or fly through websites even in the busiest cafes.",
      },
      {
        title: "Performance on the go",
        description:
          "Powered by 10th Gen Intel® Core™ processors, the Yoga C640 gives you an unbelievably responsive computer experience. Featuring built-in intelligent performance features that anticipate your needs, this laptop offers a more intuitive and personalized experience.",
      },
    ],
    information: [
      { atribute: "Color", value: "White/ Black/ Teal/ Brown" },
      { atribute: "cpu", value: "i5 12th Gen" },
    ],
    images: ["laptop-1.jpg", "laptop-2.jpg", "laptop-3.jpg", "laptop-4.jpg"],
  };
}
console.log("from line 82", clickedProduct);

const productList = [
  {
    productid: "1",
    productName: "Lenovo Yoga C640 (13”)",
    ratting: 7,
    availability: "inStock",
    price: 859,
    highlights: ["16 GB DDR4 2400MHz", "Imported", "Art.No. 06-7680"],
    descriptions: [
      {
        title: "Up to 13 hours of battery life",
        description:
          "Powered by 10th Gen Intel® Core™ processors, the Yoga C640 gives you an unbelievably responsive computer experience. Featuring built-in intelligent performance features that anticipate your needs, this laptop offers a more intuitive and personalized experience. With advanced connectivity, stream smoother and connect to as many smart devices in your home as you want, or fly through websites even in the busiest cafes.",
      },
      {
        title: "Performance on the go",
        description:
          "Powered by 10th Gen Intel® Core™ processors, the Yoga C640 gives you an unbelievably responsive computer experience. Featuring built-in intelligent performance features that anticipate your needs, this laptop offers a more intuitive and personalized experience.",
      },
    ],
    information: [
      { atribute: "Color", value: "White/ Black/ Teal/ Brown" },
      { atribute: "cpu", value: "i5 12th Gen" },
    ],
    images: ["laptop-1.jpg", "laptop-2.jpg", "laptop-3.jpg", "laptop-4.jpg"],
  },
  {
    productid: "2",
    productName: "Lenovo ThinkPad L13 Yoga",
    ratting: 5,
    availability: "inStock",
    price: 734,
    highlights: ["16 GB DDR4 2400MHz", "Imported", "ThinkPad L13 Yoga"],
    descriptions: [
      {
        title: "Updated for style",
        description:
          "The ThinkPad L13 Yoga features a redesigned chassis with much thinner bezels than its predecessors—yielding a cleaner, smarter display. Choose between Silver and Black for this lightweight 2-in-1 laptop that starts at just 1.43kg / 3.17lbs. You can also choose to have a world-facing camera to photo and video the things directly around you.",
      },
      {
        title: "Seamless security",
        description:
          "Keep your data and your privacy safe on your ThinkPad L13 Yoga 2-in-1 with our comprehensive suite of ThinkShield security features. Discrete Trusted Platform Module (dTPM) encrypts data and works in conjunction with Windows 10 security. ThinkShutter blocks the lens on both the HD and optional IR cameras. The optional fingerprint reader uses biometrics to log in with a simple touch.",
      },
    ],
    information: [
      { atribute: "Color", value: "White/ Black/ Teal/ Grey" },
      { atribute: "cpu", value: "i7 12th Gen" },
    ],
    images: ["laptop-11.jpg", "laptop-12.jpg", "laptop-13.jpg", "laptop-14.jpg"],
  },
];

let productDetailsArray = productList.filter((product) => {
  return product.productid === clickedProduct.id;
});
let productDetails = productDetailsArray[0];

const updateProductDetailsHTML = function () {
  //   localStorage.setItem("shoppingCart", JSON.stringify(productsInCart));
  if (productDetails) {
    let imagesPreview = productDetails.images.map((image) => {
      return `
      <a
      href="#"
      data-image="assets/images/${image}"
      data-zoom-image="assets/images/${image}"
      class="active"
    >
      <img
        src="assets/images/${image}"
        data-large-image="assets/images/${image}"
        alt="img"
      />
    </a>
    `;
    });
    let highLights = productDetails.highlights.map((highlight) => {
      return `
      <li>${highlight}</li>
        `;
    });
    let descriptions = productDetails.descriptions.map((description) => {
      return `
        <div>
        <h3 style="color: blue">${description.title}</h3>
        <p>${description.description}</p>
        </div>
      `;
    });
    let information = productDetails.information.map((information) => {
      return `
      <tr>
      <td>${information.atribute}</td>
      <td>${information.value}</td>
      </tr>
    `;
    });

    let imagePreviewBox = `
    <img
    id="img_zoom"
    data-zoom-image="assets/images/${productDetails.images[0]}"
    src="assets/images/${productDetails.images[0]}"
    alt="img"
  />
  <a href="#" class="btn-zoom open_qv"
    ><i class="fa fa-search" aria-hidden="true"></i
  ></a>
  `;

    imagePreviewContainer.innerHTML = imagePreviewBox;
    imageList.innerHTML = imagesPreview.join("");
    productHighLights.innerHTML = highLights.join("");
    productDesc.innerHTML = descriptions.join("");
    productInfo.innerHTML = information.join("");
    availabilityStatus.innerHTML = productDetails.availability;
    trailItem.innerHTML = productDetails.productName;
    productTitle.innerHTML = productDetails.productName;
    unitPrice.innerHTML = `$${productDetails.price}`;
    countStar.innerHTML = `(${productDetails.ratting})`;
    productId.innerHTML = productDetails.productid;
  }
};

updateProductDetailsHTML();

//=========================== ADD TO CART ==========================//
const product = document.querySelector(".details-product");

product.addEventListener("click", (e) => {
  if (e.target.classList.contains("single_add_to_cart_button")) {
    const productdtID = product.querySelector(".product-id").innerHTML;
    const productdtName = product.querySelector(".product-title").innerHTML;
    const productdtPrice = product.querySelector(".price").innerHTML;
    const productdtQuantity = product.querySelector("input").value;
    const productdtImage = product
      .querySelector(".image-preview-container")
      .querySelector("img").src;
    let productdt = {
      id: productdtID,
      name: productdtName,
      attribute_color: "Black",
      attribute_size: "",
      price:
        Number(productdtPrice.replace("$", "")) * Number(productdtQuantity),
      basePrice: Number(productdtPrice.replace("$", "")),
      quantity: productdtQuantity,
      product_image: productdtImage,
    };
    console.log("log from line 98", productdt);
    updateProductsInCart(productdt);
    updateShoppingCartHTML();
  }
});
