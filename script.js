export function openSearchBox() {
  document.getElementById("search-box").style.height = "57px";
  document.getElementById("search-box").style.paddings = "30px";
  console.log("ggg");
}
export function closeSearchBox() {
  document.getElementById("search-box").style.height = "0px";
  document.getElementById("search-box").style.paddings = "0px";
}
export function openSliderMenu() {
  document.getElementById("sliderMenu").style.width = "85vw";
  document.getElementById("openSliderMenuButton").style.left = "-50px";
  document.getElementById("closeSliderMenuButton").style.right = "0px";
  document.getElementById("sliderMenu").style.boxShadow =
    "1em 0em 0em 40em rgb(0 0 0 / 74%) ";
}
export function closeSliderMenu() {
  document.getElementById("sliderMenu").style.width = "0vw";
  document.getElementById("openSliderMenuButton").style.left = "0px";
  document.getElementById("closeSliderMenuButton").style.right = "40px";
  document.getElementById("sliderMenu").style.boxShadow =
    "0em 0em 0em 0em rgb(0 0 0 / 74%) ";
}
export function closeSubAlert() {
  document.getElementById("subAlert").style.display = "none";
  document.getElementById("subAlert").style.opacity = "0";
}
export function bIcoSli() {
  document.getElementById("bellIcon").style.left = "0";
  document.getElementById("bellIcon").style.maxWidth = "100vw";
  document.getElementById("openBell").style.display = "none";
  document.getElementById("closeBell").style.display = "block";
}
export function bIcoSli_Close() {
  document.getElementById("bellIcon").style.left = "-407px";
  document.getElementById("openBell").style.display = "block";
  document.getElementById("closeBell").style.display = "none";
}
export function b2Nop() {
  document.getElementById("b2").style.left = "-382px";
  // document.getElementById("b2").style.bottom = "30vh";
  document.getElementById("b2").style.background = "transparent";
}

// cart---start

export function openCart() {
  const mediaQueryM = window.matchMedia("(max-width: 768px)");
  if (!mediaQueryM) {
    document.getElementById("cart-slot").style.width = "100%";
    document.getElementById("cart-slot").style.height = "100%";
  }
  document.getElementById("cart-slot").style.width = "70vw";
  document.getElementById("cart-slot").style.boxShadow =
    "rgb(127 134 143 / 41%) -4em 0px 0px 1000vw ";
}
export function openCartM() {
  document.getElementById("cart-slot").style.width = "100%";
  document.getElementById("cart-slot").style.height = "100%";

  document.getElementById("cart-slot").style.boxShadow =
    "rgb(127 134 143 / 41%) -4em 0px 0px 1000vw";
}
export function closeCart() {
  document.getElementById("cart-slot").style.width = "0vw";
  document.getElementById("cart-slot").style.boxShadow =
    "0em 0 0 0vw rgb(0 0 0 / 74%) ";
}
export function giftL() {
  document.getElementById("giftLabel").style.display = "block";
}

export function addCart() {
  openCart();
}

// card---end

// img start

// var ProductImg = document.querySelector(".large-img");
// var SmallImg = document.querySelectorAll(".small-img");
// var fd = document.querySelector(".product-link-main");

// for (var i = 0; i < SmallImg.length; i++) {
//   SmallImg[i].onclick = function () {
//     ProductImg.src = SmallImg[i].src;
//   };
// }

// img end

// new start

// var addProductToCart = document.querySelector(".addtokart");

// var createCartItem = document.createElement("LI");
// var Cart = document.querySelector(".cart-item-list");

// addProductToCart.addEventListener("click", () => {
//   openCart();
//   createCartItem.classList.add("cart-item");
//   Cart.appendChild(createCartItem);

//   var addImage = document.createElement(img);
//   addImage.classList = "cart-item-img";
//   var addShortDetails = document.createElement(img);
//   addImage.classList = "cart-item-img";
// });

// new end

// product-item start

// addcart.addEventListener("click", openCart);

// product-item end
