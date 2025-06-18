document.querySelector("#add").addEventListener("click", async (e)=>{
    try {
        e.preventDefault()
        const data = {}
        const product_id = document.querySelector("#add").value
        if (product_id) {
            data.product_id = product_id
        }
        const quantity = document.querySelector("#product-quantity").value
        if (quantity) {
            data.quantity = parseInt(quantity);
        }
        const opts = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(data)
        }
        const url = `/api/carts/add`
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