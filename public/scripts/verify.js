
document.querySelector("#verify").addEventListener("click", async () => {
  try {
    const data = {
      email: document.querySelector("#email").value,
      verifyCode: document.querySelector("#code").value,
    };
    const url = `/api/auth/verify/${data.email}/${data.verifyCode}`;
    let response = await fetch(url);
    response = await response.json();
    if (response.error) {
      alert(response.error);
    } else {
      location.replace("/");
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
});
