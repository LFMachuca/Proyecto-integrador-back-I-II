import {createOneUserService, readAllUsersService, readUsersByService, readUsersByIdService, updateUsersByIdService,destroyUsersByIdService} from "../services/users.service.js"
const updateUser = async (req, res, next) => {
      const data = req.body;
      const { _id } = req.user;
      const response = await updateUsersByIdService(_id, data);
      res.json200(response);
  };

export {updateUser}