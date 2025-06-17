import crypto from "crypto";
const { PERSISTENCE } = process.env;
class CartsDTO {
  constructor(data) {
    if (PERSISTENCE !== "mongo") {
      this._id = crypto.randomBytes(12).toString("hex");
    }
    (this.product_id = data.product_id),
      (this.user_id = data.user_id),
      (this.quantity = data.quantity),
      (this.state = data.state);
    if (PERSISTENCE !== "mongo") {
      (this.createdAt = new Date()), (this.createdAt = new Date());
      (this.updatedAt= new Date()), (this.updatedAt = new Date());
    }
  }
}
export default CartsDTO