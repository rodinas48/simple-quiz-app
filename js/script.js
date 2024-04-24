const question = document.querySelector("#question");
const quiz = document.querySelector(".quiz");
const btn = document.querySelectorAll(".btn");
const next=document.querySelector('#next')
const answer_btns = document.querySelector("#answer-btns");
const quizQuestions = [
  {
    question: "What is the result of the following expression: typeof NaN?",
    answers: [
      { text: "a) 'number'", isCorrect: true },
      { text: "b) 'string'", isCorrect: false },
      { text: "c) 'undefined'", isCorrect: false },
      { text: "d) 'NaN'", isCorrect: false },
    ],
  },
  {
    question:
      "Which of the following methods is used to add a new element to the end of an array?",
    answers: [
      { text: "a) push()", isCorrect: true },
      { text: "b) pop()", isCorrect: false },
      { text: "c) shift()", isCorrect: false },
      { text: "d) unshift()", isCorrect: false },
    ],
  },
  {
    question:
      "What will the following code output: console.log(0.1 + 0.2 === 0.3);",
    answers: [
      { text: "a) true", isCorrect: false },
      { text: "b) false", isCorrect: true },
      { text: "c) undefined", isCorrect: false },
      { text: "d) NaN", isCorrect: false },
    ],
  },
  {
    question: "What is the result of the following expression: 'hello' + 1?",
    answers: [
      { text: "a) 'hello1'", isCorrect: true },
      { text: "b) 'hello 1'", isCorrect: false },
      { text: "c) NaN", isCorrect: false },
      { text: "d) TypeError", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    answers: [
      { text: "a) number", isCorrect: false },
      { text: "b) boolean", isCorrect: false },
      { text: "c) array", isCorrect: true },
      { text: "d) function", isCorrect: false },
    ],
  },
  {
    question: "What does the following expression return? typeof([])",
    answers: [
      { text: "a) 'object'", isCorrect: true },
      { text: "b) 'Null'", isCorrect: false },
      { text: "c) 'array'", isCorrect: false },
      { text: "d) 'undefined'", isCorrect: false },
    ],
  },
  {
    question:
      "Which of the following is NOT a valid way to declare a variable in JavaScript?",
    answers: [
      { text: "a) var myVar;", isCorrect: false },
      { text: "b) let myVar;", isCorrect: false },
      { text: "c) constant myVar;", isCorrect: true },
      { text: "d) const myVar;", isCorrect: false },
    ],
  },
  {
    question:
      "What is the output of the following code? console.log(2 + '2' - 1);",
    answers: [
      { text: "a) '21'", isCorrect: false },
      { text: "b) 1", isCorrect: false },
      { text: "c) 21", isCorrect: true },
      { text: "d) NaN", isCorrect: false },
    ],
  },
  {
    question: "Which method is used to remove the last element from an array?",
    answers: [
      { text: "a) pop()", isCorrect: true },
      { text: "b) shift()", isCorrect: false },
      { text: "c) slice()", isCorrect: false },
      { text: "d) splice()", isCorrect: false },
    ],
  },
  {
    question:
      "What does the following code snippet log to the console? console.log('2' + 2);",
    answers: [
      { text: "a) '22'", isCorrect: true },
      { text: "b) 4", isCorrect: false },
      { text: "c) '4'", isCorrect: false },
      { text: "d) 22", isCorrect: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  next.innerHTML = "Next";
  
  showQuestion();
}
function showQuestion() {
  next.style.display = "none";
  let currentQuestion = quizQuestions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  question.innerHTML = questionNo + ' - ' + currentQuestion.question;
  answer_btns.innerHTML ="";
  currentQuestion.answers.forEach(function (answer) {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answer_btns.appendChild(button);
    button.addEventListener("click", selectAns);

    button.dataset.correct = answer.isCorrect;
   
   })
}

function selectAns(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answer_btns.children).forEach((btn) => {
    if (btn.dataset.correct === "true") btn.classList.add("correct");
     btn.disabled = true;
     btn.classList.add("disabled");
   });
  next.style.display = "block";
}

function showScore() {
  question.innerHTML = "";
  answer_btns.innerHTML = "";
  question.innerHTML=`You scored ${score} out of ${quizQuestions.length}!`
  next.innerHTML = "Start Again";
  next.addEventListener("click", startQuiz);
 
}

next.addEventListener("click", () => {
  if (currentQuestionIndex < quizQuestions.length-1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showScore();
  }
})
startQuiz();
