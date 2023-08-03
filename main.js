let index = 0;
let score = 0;
let name;

myArray = [
  {
    questions: "Which planet has the most moon",
    options: ["Pluto", "Mars", "Saturn", "Uranus"],
    chosenAnswer: "",
    cAnswer: "Saturn",
  },
  {
    questions: "Which part of the plant conducts photosynthesis",
    options: ["Stem", "Leaf", "Root", "Flower"],
    chosenAnswer: "",
    cAnswer: "Leaf",
  },
  {
    questions: "How many hearts does an octopus have",
    options: ["3", "5", "1", "7"],
    chosenAnswer: "",
    cAnswer: "3",
  },
  {
    questions: "Where is the smallest bone in the human body located",
    options: ["Nose", "Eye", "Teeth", "Ear"],
    chosenAnswer: "",
    cAnswer: "Ear",
  },
  {
    questions: "The second World War started in 1935",
    options: ["False", "True"],
    chosenAnswer: "",
    cAnswer: "False",
  },
];
let welcomeBody = document.getElementById("welcome-body");
let startExam = document.getElementById("startExam");
let input = document.getElementById("input");
let starter = document.getElementById("starter");
let instruction = document.getElementById("instruction");
let mainPage = document.getElementById("main-page");

function startQuiz(param) {
  if (param === "start") {
    welcomeBody.hidden = true;
    startExam.hidden = false;
  } else if (param === "exist") {
    welcomeBody.hidden = false;
    startExam.hidden = true;
    instruction.hidden = true;
    starter.hidden = false;
  } else if (param === "exam") {
    if (input.value) {
      startExam.hidden = true;
      name = input.value;
      starter.hidden = true;
      instruction.hidden = false;
      userName.innerHTML = `NAME: ${name}`;
    } else {
      input.classList.add("border-danger");
    }
  } else if (param === "startExam") {
    instruction.hidden = true;
    mainPage.hidden = false;
    userName2.innerHTML = `NAME: ${name}`;
    timer();
    display();
  }
}

let time = document.getElementById("timer");
let second = 60;
let firstModal = document.getElementById("firt-modal");
let lastModal = document.getElementById("last-modal");
function timer() {
  let clear = setInterval(() => {
    time.innerHTML = `00:00:${second}`;

    if (second != 0) {
      second--;
      return;
    }
    clearInterval(clear);
    console.log("time up");
    lastModal.classList.remove("hidden2");
    final.innerHTML = `You score ${score} out of ${myArray.length}`;
  }, 1000);
}

let selected = 0;
let clicked = true;

function display() {
  text.innerHTML = "";
  mark.innerHTML = "";
  mark.innerHTML += `<p class="  mt-3">Question ${index + 1} of ${
    myArray.length
  }</p>`;
  text.innerHTML += `<p class=" mt-3"> ${index + 1}. ${
    myArray[index].questions
  }</p>`;

  myArray[index].options.forEach((element) => {
    text.innerHTML += ` <p>  <input type="radio" name="question" id="lott" value="${element}" >
          <label> ${element} </p>
          `;
  });

  let optionValue = document.querySelectorAll("input");
  optionValue.forEach((element) => {
    if (element.value == myArray[index].chosenAnswer) {
      element.checked = true;
    }
    element.addEventListener("click", () => {
      myArray[index].chosenAnswer = element.value;
      final.innerHTML = `You score ${score} out of ${myArray.length}`;
      if (myArray[index].cAnswer == myArray[index].chosenAnswer) {
        score++;
        final.innerHTML = `You score ${score} out of ${myArray.length}`;
      } else {
      }
      console.log();
      if (element.checked === true && clicked === true) {
        clicked = false;
        answered.innerHTML = `( You have answerd ${++selected} of ${
          myArray.length
        } )`;
      }
    });
  });
}

function nextQuestion() {
  clicked = true;
  if (index + 1 < myArray.length) {
    index++;
    if (myArray[index].chosenAnswer) {
      clicked = false;
    }
    display();
  }
}
function prevQuestion() {
  clicked = true;
  if (index != 0) {
    index--;
    if (myArray[index].chosenAnswer) {
      clicked = false;
    }
    display();
  }
}

function submit() {
  // console.log(firstModal);
  firstModal.classList.remove("hidden1");
}
function no1() {
  firstModal.classList.add("hidden1");
}
function yes1() {
  firstModal.classList.add("hidden1");
  lastModal.classList.remove("hidden2");
  final.innerHTML = `You score ${score} out of ${myArray.length}`;
}
