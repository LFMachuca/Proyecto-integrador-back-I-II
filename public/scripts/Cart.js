document.querySelector("#add").addEventListener("click", async (e)=>{
    try {
        e.preventDefault()
        const data ={
        }
        const product_id = document.querySelector("#add")
        const opts = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            }
        }
        const url = "/api/carts/add"
        let response = await fetch(url,opts);
        response = await response.json();
    
        if(response.error){
            alert(response.error);
        }
    } catch (error) {
        console.log(error);
        alert(error.message);
    }

})