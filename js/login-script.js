document.getElementById("login-submit").addEventListener("click", function () {
  //get user email
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  //get user pass
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;

  if (userEmail == "nowshadbgc@gmail.com" && userPassword == "secret") {
    console.log("valid user");
  }
  window.location.href = "banking.html";
});
