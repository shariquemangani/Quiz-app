let hamIcon = document.querySelector(".hamIcon");
let navHamContentDiv = document.querySelector(".navHamContentDiv");
function hamIconFunc() {
  //   navHamContent.style.transform = `translateY(0%)`;
  hamIcon.classList.toggle("hamIconRotate");
  navHamContentDiv.classList.toggle("navHamContentTrans");
}
