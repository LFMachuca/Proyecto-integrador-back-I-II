import {
  readAllService,
  readByIdService,
} from "../services/products.service.js";
import { readCartService } from "../services/carts.service.js";
import { readUsersByService } from "../services/users.service.js";
import resetPassword from "../helpers/resetPassword.helper.js";
const indexView = async (req, res) => {
  const products = await readAllService();
  res.status(200).render("index", { products });
};
const loginView = async (req, res) => {
  res.status(200).render("login");
};
const registerView = async (req, res) => {
  res.status(200).render("register");
};
const detailsView = async (req, res) => {
  const { pid } = req.params;
  const product = await readByIdService(pid);

  res.status(200).render("details", { product });
};
const profileView = async (req, res) => {
  const { user } = req;
  res.status(200).render("profile", { user });
};
const updateUserView = async (req, res) => {
  res.status(200).render("update-user");
};
const cartView = async (req,res) =>{
  const { _id } = req.user
  const cart = await readAllService({user_id:_id})
  res.status(200).render("cart", {cart})
}
const verifyView = async (req,res) => {
  const { email } = req.params;
  res.status(200).render("verify", {email});
}
const resetView = async (req,res) => {
  res.status(200).render("reset")
}
const resetPassView = async(req,res)=>{
  const {email} = req.params;
  res.status(200).render("reset-password",{email})
}

export { indexView,loginView, registerView, detailsView, profileView, updateUserView, cartView, verifyView, resetView, resetPassView}