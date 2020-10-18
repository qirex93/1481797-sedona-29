const searchButton = document.querySelector(".search-button");
const searchPopup = document.querySelector(".modal-hotels");
const inputs = document.querySelectorAll(".modal-hotels input");
const buttons = document.querySelectorAll(".modal-hotels button");


/* open-close modal-window */

searchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (searchPopup.classList.contains("modal-show-down")) {
        searchPopup.classList.add("modal-show-up");
        searchPopup.classList.remove("modal-show-down");
        inputs.forEach(function(x) {
            x.setAttribute("disabled", "disabled");
        })
        buttons.forEach(function(x) {
            x.setAttribute("disabled", "disabled");
        })
    }

    else {
        searchPopup.classList.remove("modal-show-up");
        searchPopup.classList.add("modal-show-down");
        inputs.forEach(function(x) {
            x.removeAttribute("disabled");
        })
        buttons.forEach(function(x) {
            x.removeAttribute("disabled");
        })
    }
});


/* plus count button*/

const  adultsPlusButton = searchPopup.querySelector(".adults-container .cross");
const  adultsCountInput = searchPopup.querySelector(".adults");

adultsPlusButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    const volNumber = adultsCountInput.getAttribute("value")
    adultsCountInput.setAttribute("value", parseInt(volNumber)+1)
})

const  childrenPlusButton = searchPopup.querySelector(".children-container .cross");
const  childrenCountInput = searchPopup.querySelector(".children");

childrenPlusButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    const volNumber = childrenCountInput.getAttribute("value")
    childrenCountInput.setAttribute("value", parseInt(volNumber)+1)
})


/* minus count button*/

const  adultsMinusButton = searchPopup.querySelector(".adults-container .minus");

adultsMinusButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    const volNumber = adultsCountInput.getAttribute("value")
    adultsCountInput.setAttribute("value", parseInt(volNumber)-1)
})

const  childrenMinusButton = searchPopup.querySelector(".children-container .minus");

childrenMinusButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    const volNumber = childrenCountInput.getAttribute("value")
    childrenCountInput.setAttribute("value", parseInt(volNumber)-1)
})




