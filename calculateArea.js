const baseInput = document.querySelector("#base-input");
const heightInput = document.querySelector("#height-input");
const areaInput = document.querySelector("#area-input");

const form = document.querySelector("#form");

const btn = document.querySelector("#area-btn");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  let baseInputValue = Number(baseInput.value);
  let heightInputValue = Number(heightInput.value);
  let areaInputValue = Number(areaInput.value);
  console.log(baseInputValue, heightInputValue, areaInputValue);

  calculateArea(baseInputValue, heightInputValue, areaInputValue);
}

function calculateArea(a, b, c) {
  c = (a * b) / 2;
  areaInput.value = c;
}
