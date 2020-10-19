const searchButton = document.querySelector(".search-button");
const searchPopup = document.querySelector(".modal-hotels");
const inputs = document.querySelectorAll(".modal-hotels input");
const buttons = document.querySelectorAll(".modal-hotels button");

const adultsPlusButton = searchPopup.querySelector(".adults-container .cross");
const adultsCountInput = searchPopup.querySelector(".adults");
const childrenMinusButton = searchPopup.querySelector(".children-container .minus");
const adultsMinusButton = searchPopup.querySelector(".adults-container .minus");
const childrenPlusButton = searchPopup.querySelector(".children-container .cross");
const childrenCountInput = searchPopup.querySelector(".children");


var initsScript = function () {
  searchPopup.classList.add("modal-off");
};
try {
  window.addEventListener("load", initsScript , false);
} catch(e) {
  window.onload = initsScript;
}


searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (searchPopup.classList.contains("modal-show-down")) {
      searchPopup.classList.remove("modal-off");
      searchPopup.classList.add("modal-show-up");
      searchPopup.classList.remove("modal-show-down");
      inputs.forEach(function (item) {
          item.setAttribute("disabled", "disabled");
      })
      buttons.forEach(function (item) {
        item.setAttribute("disabled", "disabled");
      })
}

  else {
    searchPopup.classList.remove("modal-off");
    searchPopup.classList.remove("modal-show-up");
    searchPopup.classList.add("modal-show-down");
    inputs.forEach(function (item) {
      item.removeAttribute("disabled");
      })
    buttons.forEach(function (item) {
      item.removeAttribute("disabled");
    })
  }
});


/* plus count button*/

adultsPlusButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  const volNumber = adultsCountInput.getAttribute("value")
  adultsCountInput.setAttribute("value", parseInt(volNumber) + 1)
})

childrenPlusButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  const volNumber = childrenCountInput.getAttribute("value")
  childrenCountInput.setAttribute("value", parseInt(volNumber) + 1)
})


/* minus count button*/

adultsMinusButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  const volNumber = adultsCountInput.getAttribute("value")
  adultsCountInput.setAttribute("value", parseInt(volNumber) - 1)
})

childrenMinusButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  const volNumber = childrenCountInput.getAttribute("value")
  childrenCountInput.setAttribute("value", parseInt(volNumber) - 1)
})
