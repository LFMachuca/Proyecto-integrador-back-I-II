import crypto from "crypto";
const {PERSISTENCE} = process.env;
class ProductsDTO{
    constructor(data){
        if (PERSISTENCE !== "mongo") {
            this.id = crypto.randomBytes(12).toString("hex");
        }
        this.title= data.title;
        this.description= data.description;
        this.category= data.category;
        this.image= data.image;
        this.price= data.price;
        this.stock=data.stock;
        this.onsale= data.onsale || false;
        this.owner_id=data.owner_id;
        if (PERSISTENCE !== "mongo") {
            this.createdAt = new Date();
            this.updatedAt = new Date
        }
    }
}

export default ProductsDTO