import { readCartService, addProductService, readProductsByService,updateProductsByIdService } from "../services/carts.service.js";

const readCart = async (req,res)=>{
    const {_id } = req.user;
    const response = await readCartService({user_id:_id})
    res.json200(response);
}
const addProduct = async (req,res)=>{
    const data= req.body;
    data.user_id = req.user._id
    const product = await readProductsByService({product_id:data.product_id})
    if (!product) {
        const response = await addProductService(data)
         return res.json200(response)
    }
    const quantity = data.quantity + product.quantity;
    const response = await updateProductsByIdService(product._id,{quantity:quantity})
    res.json200(response)
}


export { readCart, addProduct }