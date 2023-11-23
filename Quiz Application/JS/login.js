// let navUserName = document.getElementById("navUserName");
// let welcomeUserName = document.getElementById("welcomeUserName");
// loginName = localStorage.getItem("loginName");
// navUserName.innerHTML = loginName;
// welcomeUserName.innerHTML = loginName;

function loginBtn() {
  let loginName = document.getElementById("loginName").value;
  let loginEmail = document.getElementById("loginEmail").value;
  let loginPassword = document.getElementById("loginPassword").value;
  if (loginName !== "" && loginEmail !== "" && loginPassword !== "") {
    localStorage.setItem("loginName", loginName);
    location.href = "../Home/chooseTopic.html";
  } else {
    alert("please fill the required list");
  }
}
