"use strict";

// ---- Card Inputs ----
const nameOfCardHolder = document.querySelector(".cardHolderName");
const cardNumber = document.querySelector(".cardNumber");
const cardMM = document.querySelector(".mm");
const cardYY = document.querySelector(".yy");
const cardCVC = document.querySelector(".CVC");
// const errorsCN = document.querySelector(".error-CN");
// const errorsDate = document.querySelector(".errorsdate");

// ---- Card Display Informations ----
const cardName = document.querySelector(".card-name");
const cardNum = document.querySelector(".card-num");
const cardExp = document.querySelector(".card-exp");
const cardCvc = document.querySelector(".card-cvc");

// const contentSection = document.querySelector(".content-section");
// const cardForm = document.querySelector(".card-form");
// cardName.textContent ='how are you'

const button = document.querySelector(".button");

button.addEventListener("click", function () {
  console.log(typeof nameOfCardHolder.value);
  console.log(typeof cardNumber.value);
  cardCvc.textContent = cardCVC.value;
  cardExp.textContent = `${cardMM.value}/${cardYY.value}`;
  if (nameOfCardHolder.value !== '' ) {
    cardName.textContent = `${nameOfCardHolder.value}`;
  }
  else{   
    document.querySelector('.error-CN').textContent = 'No input! Please insert your name';
  }
  if (cardNumber.value.lenght < 12 && cardNumber > 15) {
    cardNum.textContent = cardNumber.value;
  } else {
    document.querySelector(".error-N").textContent =
      "too long";
  }
  if (cardMM.value.lenght === 2 && cardYY === 2) {
    cardNum.textContent = cardNumber.value;
  } else {
    document.querySelector(".error-MY").textContent = "two digits needed";
  }
  if (cardCVC.value.lenght === 3 ) {
    cardCvc.textContent = cardCVC.value;
  } else {
    document.querySelector(".error-CVC").textContent =
      " three digits needed";
  }
});
