let navUserName = document.getElementById("navUserName");
let welcomeUserName = document.getElementById("welcomeUserName");
let loggedInUserName = localStorage.getItem("loggedInUser");
if (loggedInUserName) {
  navUserName.innerHTML = loggedInUserName;
  welcomeUserName.innerHTML = loggedInUserName;
} else {
  console.log("User is not logged in");
}

let dateSpan = document.getElementById("dateSpan");
let wholeDate = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let days = day[wholeDate.getDay()];
let month = months[wholeDate.getMonth()];
let year = wholeDate.getFullYear();
let date = wholeDate.getDate();
let liveTimeSpan = document.getElementById("liveTimeSpan");
function liveTime() {
  var d = new Date();
  liveTimeSpan.innerHTML = d.toLocaleTimeString("en-US");
}
setInterval(function () {
  liveTime();
}, 1000);
dateSpan.innerHTML = ` ${days}, ${month} ${date}, ${year} -`;

let ChoostopicPopupParent = document.getElementById("ChoostopicPopupParent");
let alltopic = document.querySelectorAll(".topics");
let selectedTopic = "";
let choostopicLvl;

function showTopics() {
  ChoostopicPopupParent.style.transform = "scale(1)";
}
function popupCancel() {
  ChoostopicPopupParent.style.transform = "scale(0)";
}
let questionAnswerDivParent = document.querySelector(
  ".questionAnswerDivParent"
);
let qAndAParent = document.getElementById("qAndAParent");

const progressBarRadioCustom = document.querySelectorAll(
  ".progressBarRadioCustom"
);
let finishBtnDiv = document.querySelector(".finishBtnDiv");

document.addEventListener("DOMContentLoaded", () => {
  // Set the initial active dot color to yellow
  progressBarRadioCustom[0].style.backgroundColor = "#ffc400";

  progressBarRadioCustom.forEach((button, index) => {
    button.addEventListener("click", () => {
      qAndAParent.style.transform = `translateX(${-100 * index}vw)`;
      progressBarRadioCustom.forEach((dot) => {
        dot.style.backgroundColor = "#ddd";
      });
      progressBarRadioCustom[index].style.backgroundColor = "#ffc400";
      console.log(index);
      if (index === 9) {
        finishBtnDiv.style.transform = `translate(0px)`;
      } else {
        finishBtnDiv.style.transform = `translate(300px)`;
      }
    });
  });

  // Add event listeners for next and previous buttons
  const nextBtn = document.getElementById("nextBtn");
  const previousBtn = document.getElementById("previousBtn");
  nextBtn.addEventListener("click", () => {
    let currentIndex = getCurrentIndex();
    if (currentIndex < 9) {
      qAndAParent.style.transform = `translateX(${
        -100 * (currentIndex + 1)
      }vw)`;
      updateProgressBar(currentIndex + 1);
      if (currentIndex === 8) {
        finishBtnDiv.style.transform = `translate(0px)`;
      }
    }
  });

  previousBtn.addEventListener("click", () => {
    let currentIndex = getCurrentIndex();
    if (currentIndex > 0) {
      qAndAParent.style.transform = `translateX(${
        -100 * (currentIndex - 1)
      }vw)`;
      updateProgressBar(currentIndex - 1);
      if (currentIndex !== 8) {
        finishBtnDiv.style.transform = `translate(300px)`;
      }
    }
  });

  // Helper function to get the current index
  function getCurrentIndex() {
    for (let i = 0; i < progressBarRadioCustom.length; i++) {
      if (
        progressBarRadioCustom[i].style.backgroundColor === "rgb(255, 196, 0)"
      ) {
        return i;
      }
    }
    return 0;
  }

  // Helper function to update the progress bar
  function updateProgressBar(index) {
    progressBarRadioCustom.forEach((dot) => {
      dot.style.backgroundColor = "#ddd";
    });
    progressBarRadioCustom[index].style.backgroundColor = "#ffc400";
  }
});

progressBarRadioCustom.forEach((button, index) => {
  button.addEventListener("click", () => {
    qAndAParent.style.transform = `translateX(${-100 * index}vw)`;
    progressBarRadioCustom.forEach((dot) => {
      dot.style.backgroundColor = "#ddd";
    });
    progressBarRadioCustom[index].style.backgroundColor = "#ffc400";
    console.log(index);
    let finishBtnDiv = document.querySelector(".finishBtnDiv");
    if (index === 9) {
      finishBtnDiv.style.transform = `translate(0px)`;
    } else {
      finishBtnDiv.style.transform = `translate(300px)`;
    }
  });
});

alltopic.forEach((topic, index) => {
  topic.addEventListener("click", () => {
    alltopic.forEach((topic) => {
      topic.style.backgroundColor = "#ddd";
      topic.style.boxShadow = "none";
      topic.style.color = "black";
    });
    selectedTopic = alltopic[index].innerHTML;
    topic.style.backgroundColor = "#ffc400";
    topic.style.color = "white";
  });
});

let selectedQuestions;
function quizStartFun() {
  choostopicLvl = document.getElementById("choostopicLvl").value;
  if (selectedTopic != "") {
    console.log("Selected topic", selectedTopic);
    console.log("Selected level", choostopicLvl);
    questionAnswerDivParent.style.transform = "scale(1)";
    let time = 240;

    function updateTimer() {
      document.getElementById("timer").innerText = time;
      if (time <= 10) {
        document.getElementById("timer").style.animation =
          "clockAnime 2s infinite linear";
        document.getElementById("timer").style.color = "red";
      }
      if (time == 0) {
        document.getElementById("timer").style.animation = "none";
        setTimeout(() => {
          let timerFinish = document.querySelector(".timerFinish");

          timerFinish.style.transform = `translate(0%)`;
          setTimeout(() => {
            timerFinish.style.transform = `translate(100%)`;
          }, 2000);
          setTimeout(() => {
            finishBtnFunc();
          }, 2000);
        }, 1000);
      }
    }
    function countdown() {
      if (time > 0) {
        time--;
        updateTimer();
      }
    }
    updateTimer();
    setInterval(countdown, 1000);
  } else {
    alltopic.forEach((topic) => {
      topic.style.boxShadow = "0px 0px 1px 1px red";
    });
  }

  let requiredquestions = questions.filter((question) => {
    // console.log("sudhvlbd", selectedTopic);
    // console.log("sudhvlbd", choostopicLvl);
    return question.topic == selectedTopic && question.lvl == choostopicLvl;
  });

  let randomrequiredquestions = Math.floor(Math.random() * requiredquestions);
  // console.log(randomrequiredquestions);

  function getRandomQuestions(totalQuestions, numberToSelect) {
    const randomQuestions = [];
    const copyOfQuestions = [...requiredquestions]; // Make a copy to avoid modifying the original array

    for (let i = 0; i < numberToSelect; i++) {
      const randomIndex = Math.floor(Math.random() * copyOfQuestions.length);
      const selectedQuestion = copyOfQuestions.splice(randomIndex, 1)[0];
      randomQuestions.push(selectedQuestion);
    }

    return randomQuestions;
  }
  selectedQuestions = getRandomQuestions(requiredquestions, 10);
  // console.log("selectedQuestions ", selectedQuestions);
  if (selectedQuestions == 5) {
  }
  qAndAParent.innerHTML = selectedQuestions
    .map((ques, i) => {
      return `
    <div class="quesAndAnsWrapper" key=${i}>
          <div class="questionDiv">
                 <h3>${ques.question}</h3>
           </div>
           <div class="AnswerDiv">
           ${ques.options
             .map((option, j) => {
               return `
               <h4 class="ansOption" id="option-${i}-${j}" onclick="handleOptionClick(${i}, ${j})">${option}</h4>
             `;
             })
             .join("")}
       </div>
      </div>
    `;
    })
    .join("");
}
const selectedOptions = [];
let answer;
// function handleOptionClick(questionIndex, optionIndex) {
//   console.log("questionIndex--", questionIndex, "optionIndex--", optionIndex);
//   if (!selectedOptions[questionIndex]) {
//     selectedOptions[questionIndex] = [];
//   }
//   const prevSelected = selectedOptions[questionIndex].pop();
//   if (prevSelected !== undefined) {
//     const prevSelectedOption = document.getElementById(
//       `option-${questionIndex}-${prevSelected}`
//     );
//     prevSelectedOption.classList.remove("selected");
//   }
//   selectedOptions[questionIndex].push(optionIndex);
//   const selectedOption = document.getElementById(
//     `option-${questionIndex}-${optionIndex}`
//   );
//   selectedOption.classList.add("selected");
//   console.log(
//     `Question ${questionIndex + 1}, Option ${optionIndex + 1} selected`
//   );
//   console.log("selectedOption", selectedOption.innerHTML);
//   console.log("stored", selectedOptions);
//   checkAnswers();
// }

function handleOptionClick(questionIndex, optionIndex) {
  // console.log("questionIndex--", questionIndex, "optionIndex--", optionIndex);

  if (!selectedOptions[questionIndex]) {
    selectedOptions[questionIndex] = [];
  }

  if (selectedOptions[questionIndex].length > 0) {
    const prevSelected = selectedOptions[questionIndex].pop();
    const prevSelectedOption = document.getElementById(
      `option-${questionIndex}-${prevSelected}`
    );
    prevSelectedOption.classList.remove("selected");
  }

  selectedOptions[questionIndex].push(optionIndex);
  const selectedOption = document.getElementById(
    `option-${questionIndex}-${optionIndex}`
  );
  selectedOption.classList.add("selected");

  // console.log(
  //   `Question ${questionIndex + 1}, Option ${optionIndex + 1} selected`
  // );
  // console.log("selectedOption", selectedOption.innerHTML);
  // console.log("stored", selectedOptions);
  checkAnswers();
}

let selectedOption;
// function checkAnswers() {
//   let score = 0;
//   for (let i = 0; i < selectedOptions.length; i++) {
//     const question = selectedQuestions[i];
//     const selectedOptionIndex = selectedOptions[i][0];

//     if (selectedOptionIndex !== undefined) {
//       selectedOption = question.options[selectedOptionIndex];

//       if (selectedOption === question.answer) {
//         score++;
//         console.log("Correct selected option", selectedOption);
//         console.log(`Question ${i + 1}: Correct!`);
//       } else {
//         console.log("Wrong selected option", selectedOption);

//         console.log(`Question ${i + 1}: Incorrect!`);
//       }
//     }
//   }
//   let finalResult = document.getElementById("finalResult");
//   finalResult.innerHTML = score;
//   console.log(`Total Score: ${score} out of ${selectedQuestions.length}`);
// }

function checkAnswers() {
  let score = 0;
  for (let i = 0; i < selectedOptions.length; i++) {
    if (selectedOptions[i] && selectedOptions[i].length > 0) {
      const question = selectedQuestions[i];
      const selectedOptionIndex = selectedOptions[i][0];

      if (selectedOptionIndex !== undefined && question && question.options) {
        const selectedOption = question.options[selectedOptionIndex];
        if (selectedOption === question.answer) {
          score++;
          // console.log("Correct selected option", selectedOption);
          // console.log(`Question ${i + 1}: Correct!`);
        } else {
          // console.log("Wrong selected option", selectedOption);
          // console.log(`Question ${i + 1}: Incorrect!`);
        }
      }
    }
  }
  let finalResult = document.getElementById("finalResult");
  if (finalResult) {
    finalResult.innerHTML = score;
  }
  console.log(`Total Score: ${score} out of ${selectedQuestions.length}`);
}

let resultDivParent = document.querySelector(".resultDivParent");
function finishBtnFunc() {
  if (confirm("Are you sure you want to Finish?")) {
    resultDivParent.style.transform = "scale(1)";
  }
}
// function completeBtnFunc() {
//   resultDivParent.style.transform = "scale(0)";
//   setTimeout(() => {
//     location.href = "../index.html";
//   }, 400);
// }
function tryAgainBtnFunc() {
  console.log("hi");
  resultDivParent.style.transform = "scale(0)";
  setTimeout(() => {
    location.href = "../Home/chooseTopic.html";
  }, 400);
}
let resultDivChildWrapper = document.querySelector(".resultDivChildWrapper");
function scoreBtnFunc() {
  resultDivChildWrapper.style.transform = `translate(0%)`;
}
function detailBtnFunc() {
  resultDivChildWrapper.style.transform = `translate(-50%)`;
  let detailDivChild = document.querySelector(".detailDivChild");
  detailDivChild.innerHTML = selectedQuestions
    .map((detailQues, i) => {
      return `
          <div class="detailDivChildSub">
               <h1 id="detailQuestion">Q.${
                 i + 1
               } <span id="detailQuestionSpan"> ${detailQues.question}</span>
               </h1>
               <div class="detailDivChildSubAnsDiv">
               ${detailQues.options
                 .map((detOption, k) => {
                   const isCorrect =
                     selectedOptions[i] &&
                     selectedOptions[i][0] === k &&
                     detailQues.answer === detOption;

                   return `
                   <p class="detailDivAnswer" style="border: 5px solid ${
                     isCorrect
                       ? "green"
                       : selectedOptions[i] && selectedOptions[i][0] === k
                       ? "red"
                       : "#d1d1d1"
                   };">${detOption}</p>
                `;
                 })
                 .join("")}
               </div>
          </div>
    `;
    })
    .join("");
}

//////////////////////////////
