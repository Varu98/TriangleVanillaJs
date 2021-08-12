const inputAngle = document.querySelector("#input-third-angle");
const randomInput = document.querySelector("#random-input");
const randomInput2 = document.querySelector("#random-input2");
// const input = document.querySelectorAll("#input-third-angle");
const form = document.querySelector("#form2");
const img = document.querySelectorAll(".check-icon");

randomInput.value = Math.floor(Math.random() * 120);
randomInput2.value = Math.floor(Math.random() * 90);

let sum;

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  sum =
    Number(randomInput.value) +
    Number(randomInput2.value) +
    Number(inputAngle.value);

  checkAngles(sum);
}

function checkAngles(total) {
  if (total === 180) {
    img[0].style.display = "block";
    img[1].style.display = "none";
  } else {
    img[1].style.display = "block";
    img[0].style.display = "none";
  }
}
