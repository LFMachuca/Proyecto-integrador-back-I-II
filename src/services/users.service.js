import { usersRepository } from "../repositories/repository.js";

const createOneUserService = async (data) => await usersRepository.createOne(data);
const readAllUsersService = async (filter)=> await usersRepository.readAll(filter);
const readUsersByService = async (filter)=> await usersRepository.readBy(filter);
const readUsersByIdService = async (id) => await usersRepository.readById(id);
const updateUsersByIdService = async(id, data) => usersRepository.updateById(id,data);
const destroyUsersByIdService = async(id)=> await usersRepository.destroyById(id);

export {createOneUserService, readAllUsersService, readUsersByService, readUsersByIdService, updateUsersByIdService,destroyUsersByIdService}