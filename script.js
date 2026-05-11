// script.js

document
  .getElementById("loginForm")
  .addEventListener("submit", function(e){

    e.preventDefault();

    const username =
      document.getElementById("username").value;

    const password =
      document.getElementById("password").value;

    console.log("Username:", username);
    console.log("Password:", password);

    window.location.href = "success.html";
});