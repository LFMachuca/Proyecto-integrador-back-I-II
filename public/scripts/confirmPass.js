
document.querySelector("#confirm").addEventListener("click", async () => {
  try {
    const data = {};
    const newPass = document.querySelector("#new-password").value;
    if(newPass){
      data.password = newPass;
    }
    const email = document.querySelector("#email").value
    const opts = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const url = `/api/users/reset-password/${email}`;
    let response = await fetch (url,opts)
    response = await response.json();
    if (response.error) {
      alert(response.error);
    } else {
      location.replace("/login");
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
})
