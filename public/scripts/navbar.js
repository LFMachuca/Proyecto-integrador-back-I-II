const selector = document.querySelector("#opts");

const isOnline = async () => {
  try {
    const opts = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = "/api/auth/current";
    let response = await fetch(url, opts);
    response = await response.json();
    if (response.error) {
      selector.innerHTML = `
      <a class="btn btn-success py-1 px-2 m-1" href="/register">Register</a>
      <a class="btn btn-success py-1 px-2 m-1" href="/login">Login</a>
     `;
    }else{
      selector.innerHTML = `
      <a class="btn btn-success py-1 px-2 m-1" href="/profile">Profile</a>
      <a class="btn btn-success py-1 px-2 m-1" href="/cart">Cart</a>
      <button class="btn btn-danger py-1 px-2 m-1" id="signout">Sign Out</button>
     `;
    }
      document.querySelector("#signout").addEventListener("click", async (e) => {
        try {
          e.preventDefault();
          const opts = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          };
          const url = "/api/auth/logout";
          let response = await fetch(url, opts);
          localStorage.removeItem("token");
          location.replace("/")
          response = await response.json();
        } catch (error) {
          console.log(error);
        }
      });
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", isOnline);
