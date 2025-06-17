import { readCartService, addProductService } from "../services/carts.service.js";

const readCart = async (req,res)=>{
    const {_id } = req.user;
    const response = await readCartService({user_id:_id})
    res.json200(response);
}
const addProduct = async (req,res)=>{
    const data = req.body;
    data.user_id = req.user._id
    data.product_id = req.params;

    const response = await addProductService(data)
    res.json200(response)
}


export { readCart, addProduct }