const mainElement = document.querySelector('[data-js="main"]');
const showAnswerButton1 = document.querySelector('[data-js="show-answer1"]');
const answer1 = document.querySelector('[data-js="correct-answer1"]');

const showAnswerButton2 = document.querySelector('[data-js="show-answer2"]');
const answer2 = document.querySelector('[data-js="correct-answer2"]');

const showAnswerButton3 = document.querySelector('[data-js="show-answer3"]');
const answer3 = document.querySelector('[data-js="correct-answer3"]');

showAnswerButton1.addEventListener("click", () => {
  answer1.classList.toggle("dark");
});

showAnswerButton2.addEventListener("click", () => {
  answer2.classList.toggle("dark");
});

showAnswerButton3.addEventListener("click", () => {
  answer3.classList.toggle("dark");
});
