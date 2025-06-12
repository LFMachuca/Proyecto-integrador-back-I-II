import { productsRepository } from "../repositories/repository.js";

const createOneService = async (data) => await productsRepository.createOne(data);
const readAllService = async (filter)=> await productsRepository.readAll(filter);
const readByService = async (filter)=> await productsRepository.readBy(filter);
const readByIdService = async (id) => await productsRepository.readById(id);
const updateByIdService = async(id, data) => productsRepository.updateById(id,data);
const destroyByIdService = async(id)=> await productsRepository.destroyById(id);

export {createOneService, readAllService, readByService, readByIdService, updateByIdService, destroyByIdService}