document.querySelector("#reset").addEventListener("click", async () => {
  try {
    const data = {
      email: document.querySelector("#email").value,
    };
    const url = `/api/users/${data.email}`;
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

