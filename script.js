/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/

const quizForm = document.querySelector("#quiz-form");
const answerAll = Array.from(document.querySelectorAll(".answer"));
const questionItemAll = document.querySelectorAll(".question-item");
const alertBox = document.getElementById("alert");

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  questionItemAll.forEach((question) => {
    question.classList.add("incorrect");
    question.classList.remove("correct");
  });

  const answers = answerAll.filter((answer) => answer.checked === true);

  answers.forEach((answer) => {
    const { value } = answer;

    const question = answer.closest(`.question-item`);
    if (value === "true") {
      question.classList.remove("incorrect");
      question.classList.add("correct");
    } else {
      question.classList.remove("correct");
      question.classList.add("incorrect");
    }
  });

  const allTrueAnswers = answers.every(({ value }) => value === "true");
  const checkIfAnswerIsChecked = answers.length === questionItemAll.length;

  if (allTrueAnswers && checkIfAnswerIsChecked) {
    alertBox.classList.add("active");
    setTimeout(() => {
      alertBox.classList.remove("active");
    }, 2000);
  }
});

// TODO: 3. Create a submit event listener for the form that does the following.
//    1. Prevent the default behaviour
//    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
//    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
//    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
//    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
//    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
//    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)
