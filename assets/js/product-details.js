const productDesc = document.querySelector(".product-descriptions");
const productInfo = document.querySelector(".product-info");
const productHighLights = document.querySelector(".product-high-lights");
const availabilityStatus = document.querySelector(".availability-status");
const countStar = document.querySelector(".count-star");
const price = document.querySelector(".price");
const productTitle = document.querySelector(".product-title");
const trailItem = document.querySelector(".trail-end");

const productDetails = {
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
};

const updateProductDetailsHTML = function () {
  //   localStorage.setItem("shoppingCart", JSON.stringify(productsInCart));
  if (productDetails) {
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

    productHighLights.innerHTML = highLights.join("");
    productDesc.innerHTML = descriptions.join("");
    productInfo.innerHTML = information.join("");
    availabilityStatus.innerHTML = productDetails.availability;
    trailItem.innerHTML = productDetails.productName;
    productTitle.innerHTML = productDetails.productName;
    price.innerHTML = `$${productDetails.price}`;
    countStar.innerHTML = `(${productDetails.ratting})`;
  }
};

updateProductDetailsHTML();
