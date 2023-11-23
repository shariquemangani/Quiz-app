// console.log("q->", questions);
// import { questions } from "./question.js";

console.log(questions);
let requiredquestions = questions.filter((question) => {
  return question.topic === "maths" && question.lvl === 3;
});

console.log(requiredquestions);

let navUserName = document.getElementById("navUserName");
let welcomeUserName = document.getElementById("welcomeUserName");
loginName = localStorage.getItem("loginName");
navUserName.innerHTML = loginName;
welcomeUserName.innerHTML = loginName;

let ChoostopicPopupParent = document.getElementById("ChoostopicPopupParent");
let alltopic = document.querySelectorAll(".topics");

console.log(choostopicLvl);
var math = false;
var science = false;
var historyOption = false;
function showTopics() {
  console.log(ChoostopicPopupParent);
  ChoostopicPopupParent.style.transform = "scale(1)";
}
function popupCancel() {
  ChoostopicPopupParent.style.transform = "scale(0)";
}
setTimeout(() => {
  ChoostopicPopupParent.style.transform = "scale(1)";
}, 3000);
let topicOne = document.getElementById("topicOne");
let topicTwo = document.getElementById("topicTwo");
let topicThree = document.getElementById("topicThree");

function topic1() {
  topicOne.style.backgroundColor = "#ffc400";
  topicTwo.style.backgroundColor = "#d1d1d1";
  topicThree.style.backgroundColor = "#d1d1d1";
  math = true;
  historyOption = false;
  science = false;
  alltopic.forEach((topic) => {
    topic.style.boxShadow = "none";
  });
}
function topic2() {
  topicOne.style.backgroundColor = "#d1d1d1";
  topicTwo.style.backgroundColor = "#ffc400";
  topicThree.style.backgroundColor = "#d1d1d1";
  science = true;
  historyOption = false;
  math = false;
  alltopic.forEach((topic) => {
    topic.style.boxShadow = "none";
  });
}
function topic3() {
  topicOne.style.backgroundColor = "#d1d1d1";
  topicTwo.style.backgroundColor = "#d1d1d1";
  topicThree.style.backgroundColor = "#ffc400";
  historyOption = true;
  math = false;
  science = false;
  alltopic.forEach((topic) => {
    topic.style.boxShadow = "none";
  });
}
let questionAnswerDivParent = document.querySelector(
  ".questionAnswerDivParent"
);

let qAndAParent = document.getElementById("qAndAParent");

let NextBtn = document.getElementById("NextBtn");
function previousBtnFunc() {
  qAndAParent.style.transform = "translate(0vw)";
}
function nextBtnFunc() {
  qAndAParent.style.transform = "translate(-100vw)";
}
let controlDiv = document.querySelector(".controlDiv");
setTimeout(() => {
  controlDiv.style.transform = "translate(0px)";
}, 1000);

const progressBarNumbers = document.querySelectorAll(".progressBarNumber");

// let qAndAParent = document.getElementById("qAndAParent");

progressBarNumbers.forEach((button, index) => {
  button.addEventListener("click", () => {
    // change `the current slider
    qAndAParent.style.transform = `translateX(${-100 * index}vw)`;

    // change the choosen product
    // choosenProduct = products[index];

    // change text of current products
    // currentProductTitle.textContent = choosenProduct.title;
    // currentProductPrice.textContent = "$" + choosenProduct.price;
    // currentProductImg.src = choosenProduct.colors[0].img;

    // currentProductColors.forEach((color, index) => {
    //   color.style.backgroundColor = choosenProduct.colors[index].code;
    // });
  });
});

function quizStartFun() {
  let choostopicLvl = document.getElementById("choostopicLvl").value;
  console.log("this lvl >", choostopicLvl);
  if (math) {
    console.log("math selected");
    questionAnswerDivParent.style.transform = "scale(1)";
  } else if (science) {
    questionAnswerDivParent.style.transform = "scale(1)";
    console.log("science selected");
  } else if (historyOption) {
    questionAnswerDivParent.style.transform = "scale(1)";
    console.log("history selected");
  } else {
    alltopic.forEach((topic) => {
      topic.style.boxShadow = "0px 0px 1px 1px red";
    });
  }
  qAndAParent.innerHTML = questions
    .map((ques) => {
      return `
    <div class="quesAndAnsWrapper">
          <div class="questionDiv">
                 <h3>${ques.question}</h3>
           </div>
            <div class="AnswerDiv">
               <h4 class="ansOption">
                  <span class="ansOptionAlph">A.</span>
                   <p class="optionContent">${ques.options[0]}</p>
               </h4>
               <h4 class="ansOption">
                   <span class="ansOptionAlph">B.</span>
                   <p class="optionContent">${ques.options[1]}</p>
               </h4>
               <h4 class="ansOption">
                   <span class="ansOptionAlph">C.</span>
                   <p class="optionContent">${ques.options[2]}</p>
               </h4>
               <h4 class="ansOption">
                   <span class="ansOptionAlph">D.</span>
                   <p class="optionContent">${ques.options[3]}</p>
               </h4>
           </div>
      </div>
    `;
    })
    .join("");
}
