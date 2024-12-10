const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborghinis",
    correct: "a",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTTP stand for?",
    a: "HyperText Transfer Protocol",
    b: "HyperText Transmission Process",
    c: "HyperText Transfer Program",
    d: "HyperText Transformation Protocol",
    correct: "a",
  },
  {
    question: "Which language makes a web page interactive?",
    a: "CSS",
    b: "HTML",
    c: "JavaScript",
    d: "Python",
    correct: "c",
  },
  {
    question: "Which HTML tag is used to insert an image?",
    a: "<image>",
    b: "<img>",
    c: "<src>",
    d: "<picture>",
    correct: "b",
  },
  {
    question: "What is the purpose of the <head> tag in HTML?",
    a: "To define the main content of the document",
    b: "To include metadata and links to styles/scripts",
    c: "To create a header section",
    d: "To display a title in the browser window",
    correct: "b",
  },
  {
    question: "What is the correct syntax to create a link in HTML?",
    a: "<link href='example.com'>Example</link>",
    b: "<a>example.com</a>",
    c: "<a href='example.com'>Example</a>",
    d: "<url href='example.com'>Example</url>",
    correct: "c",
  },
  {
    question: "Which CSS property is used to change the background color?",
    a: "color",
    b: "background-color",
    c: "bgcolor",
    d: "backcolor",
    correct: "b",
  },
  {
    question: "What is the result of 2 + '2' in JavaScript?",
    a: "4",
    b: "22",
    c: "NaN",
    d: "undefined",
    correct: "b",
  },
  {
    question:
      "Which method is used to add an element to the end of an array in JavaScript?",
    a: ".add()",
    b: ".push()",
    c: ".append()",
    d: ".concat()",
    correct: "b",
  },
  {
    question: "What is the default HTML tag for the largest heading?",
    a: "<h1>",
    b: "<heading>",
    c: "<h6>",
    d: "<title>",
    correct: "a",
  },
  {
    question: "Which of the following is a JavaScript framework?",
    a: "Django",
    b: "React",
    c: "Flask",
    d: "Laravel",
    correct: "b",
  },
  {
    question: "What does 'float' in CSS do?",
    a: "Creates a floating element above the rest",
    b: "Specifies the background position",
    c: "Positions an element to the left or right of its container",
    d: "Sets the transparency level of an element",
    correct: "c",
  },
  {
    question: "Which of the following is not a semantic HTML tag?",
    a: "<article>",
    b: "<div>",
    c: "<section>",
    d: "<header>",
    correct: "b",
  },
  {
    question: "What does the <title> tag do in HTML?",
    a: "Defines the title of the document",
    b: "Displays a heading on the page",
    c: "Includes metadata for the page",
    d: "Creates a subtitle under the main header",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const progressEl = document.getElementById("progress");
const feedbackEl = document.getElementById("feedback");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  deselectAnswers();
  feedbackEl.innerText = "";
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  progressEl.innerText = `Question ${currentQuiz + 1} of ${quizData.length}`;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      feedbackEl.innerText = "Correct!";
      feedbackEl.style.color = "green";
      score++;
    } else {
      feedbackEl.innerText = "Incorrect.";
      feedbackEl.style.color = "red";
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      setTimeout(loadQuiz, 2000);
    } else {
      setTimeout(() => {
        quiz.innerHTML = `
                    <h2 style="text-align:center;">Score : ${score}/${quizData.length} </h2>
                    <button onclick="location.reload()">Restart</button>
                `;
      }, 2000);
    }
  }
});

loadQuiz();
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
