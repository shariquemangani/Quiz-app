let userData = [];

function loginBtn() {
  let loginName = document.getElementById("loginName").value;
  let loginEmail = document.getElementById("loginEmail").value;
  let loginPassword = document.getElementById("loginPassword").value;

  if (loginName !== "" && loginEmail !== "" && loginPassword !== "") {
    // Form fields are not empty

    // Retrieve existing users from local storage
    let storedUserData = localStorage.getItem("userData");
    userData = storedUserData ? JSON.parse(storedUserData) : [];

    // Check if the user with the provided email already exists
    let existingUser = userData.find((user) => user.email === loginEmail);

    if (existingUser) {
      // User with the provided email already exists
      alert(
        "User with this email already exists. Please choose a different email."
      );
    } else {
      // Create a new user object
      let newUser = {
        name: loginName,
        email: loginEmail,
        password: loginPassword,
      };

      // Add the new user to the array
      userData.push(newUser);

      // Save the updated user data to local storage
      localStorage.setItem("userData", JSON.stringify(userData));

      // Store the logged-in user's name in local storage
      localStorage.setItem("loggedInUser", loginName);

      // Redirect to the home page
      location.href = "../Home/chooseTopic.html";
    }
  } else {
    // Form fields are not filled
    alert("Please fill in all the required fields");
  }
}
