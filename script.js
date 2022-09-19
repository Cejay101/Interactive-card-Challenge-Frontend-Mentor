// "use strict";

const nameOfCardHolder = document.querySelector(".cardHolderName");
const cardName = document.querySelector(".card-name");

const cardNumm = document.querySelector(".cardNumber");
const cardNumber = document.querySelector(".card-num");

const cardMM = document.querySelector(".mm");
const cardYY = document.querySelector(".yy");
const cardExp = document.querySelector(".card-exp");
const cardExp1 = document.querySelector(".card-exp1");
const expError = document.querySelector(".error-MY");
const expiry = Array.from(document.querySelectorAll(".expiry"));

const cardCVC = document.querySelector(".CVC");
// const cardCVC1 = Array.from(document.querySelector(".CVC");
const cardCvc = document.querySelector(".card-cvc");

const thankYou = document.querySelector(".thank");
const thankYouSection = document.getElementById("section-c");
const submit = document.querySelector(".button-submit");
const form = document.querySelector("form");
const continueBtn = document.querySelector(".button-continue");

//Card Name validation
function inputName() {
  cardName.innerHTML = nameOfCardHolder.value;
  thankYou.innerHTML = `Thank You ${nameOfCardHolder.value}`;
  if (cardName.innerHTML == "") {
    cardName.innerHTML = nameOfCardHolder.placeholder;
  }
}
function inputCardNum() {
  let cardNumberInput = cardNumm.value;
  // Do not allow users to write invalid characters
  let formattedCardNumber = cardNumberInput.replace(/[^\d]/g, "");
  formattedCardNumber = formattedCardNumber.substring(0, 16);
  // Split the card number is groups of 4
  let cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
  if (cardNumberSections !== null) {
    formattedCardNumber = cardNumberSections.join(" ");
  }
  // If the formmattedCardNumber is different to what is shown, change the value
  if (cardNumberInput !== formattedCardNumber) {
    cardNumm.value = formattedCardNumber;
  }
  cardNumber.innerHTML = cardNumm.value;
  if (cardNumm.value === "") {
    cardNumber.innerHTML = cardNumm.placeholder;
  }
}

function inputMM() {
  let formattedMM = expiry[0].value;
  formattedMM = formattedMM.substring(0, 2);
  expiry[0].value = formattedMM;
  console.log(expiry[0].value);
  if (expiry[0].value === "") {
    cardExp.innerHTML = "00";
  } else {
    cardExp.innerHTML = expiry[0].value;
  }
}
function inputYY() {
  let formattedYY = expiry[1].value;
  formattedYY = formattedYY.substring(0, 4);
  expiry[1].value = formattedYY;
  if (expiry[1].value === "") {
    cardExp.innerHTML = "0000";
  } else {
    cardExp1.innerHTML = "/" + expiry[1].value;
  }
}
function inputCvc() {
  let formattedCvc = cardCVC.value;

  formattedCvc = formattedCvc.substring(0, 3);
  cardCVC.value = formattedCvc;
  if (cardCVC.value === "") {
    cardCvc.innerHTML = "000";
  } else {
    cardCvc.innerHTML = formattedCvc;
  }
  // console.log(cardCVC.value);
}

function massValidate() {
  function validateName() {
    let cardholderExp = /^[a-zA-Z ]+$/;
    let errorMsg = document.querySelector(".error-CN");
    if (nameOfCardHolder.value.match(cardholderExp)) {
      errorMsg.textContent = "";
    } else {
      errorMsg.innerHTML = "Wrong input! insert full name";
    }
  }
  function validateCard() {
    let cardNumError = document.querySelector(".error-N");
    if (cardNumm.value.length > 0 && cardNumm.value.length < 16) {
      cardNumError.innerHTML = "Wrong format!";
    } else if (cardNumm.value == "") {
      cardNumError.innerHTML = "Can't be blank!";
    } else {
      cardNumError.innerHTML = "";
    }
  }
  function validateExpiry() {
    let expMonth = /[\d]/g;
    let expYear = /[\d]/g;

    if (expiry[0].value.match(expMonth) && expiry[1].value.match(expYear)) {
      expError.innerHTML = "";
    } else {
      expError.innerHTML = "Wrong format!";
    }
    //  else if (
    //   expiry[0].value.match(expMonth) &&
    //   expiry[1].value.match(expYear)
    // ) {
    //   expError.innerHTML = "";
    // } else if (expiry[0] == "") {
    //   expError.innerHTML = "Can't be blank!";
    // } else {
    //   expError.innerHTML = "Wrong format!";
    // }
  }
  function validateCvc() {
    let cvcErrorMsg = document.querySelector(".error-CVC");
    let cvcExp = /[\d]/g;
    if (cardCVC.value === "") {
      cvcErrorMsg.innerHTML = "Can't be blank";
    } else if (cardCVC.value.match(cvcExp)) {
      cvcErrorMsg.innerHTML = "";
    } else {
      cvcErrorMsg.innerHTML = "Wrong format!";
    }
  }
  validateCard();
  validateName();
  validateExpiry();
  validateCvc();
  if (
    cardName.innerHTML == nameOfCardHolder.placeholder ||
    cardNumber.innerHTML == cardNumm.placeholder ||
    cardMM.innerHTML == "00" ||
    cardYY.innerHTML == "0000" ||
    cardCvc.innerHTML == "000" ||
    (cardNumm.value.length > 0 && cardNumm.value.length < 16)
  ) {
    return false;
  } else {
    return true;
  }
}
// Submit Button

submit.addEventListener("click", function () {
  massValidate();
  if (massValidate() == false) {
    // event.preventDefault();
    form.classList.remove("hidden");
    thankYouSection.classList.add("hidden");
  } else {
    form.classList.add("hidden");
    thankYouSection.classList.remove("hidden")
      thankYouSection.classList.remove("hidden")
    // if ((errorMsg.innerHTML = "")) {
    //   form.classList.add("hidden");
    //   thankYouSection.classList.add("hidden");
    // } else {
    //   form.classList.remove("hidden");
    //   thankYouSection.classList.add("hidden");
    // }
  }

 
});

// Continue Button

continueBtn.addEventListener("click", function () {
  event.preventDefault();
  thankYouSection.classList.add("hidden");
  form.classList.remove("hidden");
  cardName.innerHTML = nameOfCardHolder.placeholder;
  cardNumber.innerHTML = cardNumm.placeholder;
  cardMM.innerHTML = "00";
  cardYY.innerHTML = "0000";
  cardCvc.innerHTML = "000";
  nameOfCardHolder.value = "";
  cardNumm.value = "";
  expiry[0].value = "";
  expiry[1].value = "";
  cardCVC.value = "";
  expError.innerHTML = "";
});
