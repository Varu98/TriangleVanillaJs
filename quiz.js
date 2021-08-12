let form = document.querySelector("#form");
const btn = document.querySelector("#btn");
const output = document.querySelector(".quiz-output");

const ansArr = [
  "90°",
  "180°",
  "(Base X Height) / 2",
  "Equilateral triangle",
  "3",
];

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  let i = 0;
  let score = 0;

  const formResults = new FormData(form);

  for (const value of formResults.values()) {
    console.log(value);
    if (ansArr[i] === value) {
      score++;
      console.log(score);
    }
    i++;
    console.log(i);
  }

  output.innerHTML = `Your Score Is ${score}`;
  output.style.width = "200px";
}
