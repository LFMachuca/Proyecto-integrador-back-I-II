import { createHash } from "../helpers/hash.helper.js";
import resetPassword from "../helpers/resetPassword.helper.js";
import {createOneUserService, readAllUsersService, readUsersByService, readUsersByIdService, updateUsersByIdService,destroyUsersByIdService} from "../services/users.service.js"
const updateUser = async (req, res, next) => {
      const data = req.body;
      const { _id } = req.user;
      const response = await updateUsersByIdService(_id, data);
      res.json200(response);
  };
const sendEmail = async (req,res,next) => {
  const {email}=req.params;
  const response = await resetPassword(email);
  res.json200(response)
}
const updatePassword = async (req,res,next) => {
  const { email } = req.params;
  const {password} = req.body;
  console.log(password);
  const user = await readUsersByService({email});
  if(!user){
    return res.json404()
  }
  const hashedPassword = createHash(password)
  const response = await updateUsersByIdService(user._id, {password:hashedPassword});
  res.json200(response);
} 

export {updateUser, sendEmail, updatePassword}