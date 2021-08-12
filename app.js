const input = document.querySelectorAll("#angle-input");
const form = document.getElementById("form");
const outputDiv = document.querySelector(".output");

const valueArray = [];

form.addEventListener("submit", onSubmitHandler);

function onSubmitHandler(e) {
  e.preventDefault();

  for (let i = 0; i < input.length; i++) {
    valueArray[i] = Number(input[i].value);
  }

  let sum = 0;
  valueArray.map((a) => {
    sum = sum + a;
    return sum;
  });

  if (sum === 180) {
    outputDiv.innerHTML = "Great The Given Values Will Form  a Triangles";
  } else {
    outputDiv.innerHTML = "Sorry These Values Will Not Form  a Triangle";
  }
}
