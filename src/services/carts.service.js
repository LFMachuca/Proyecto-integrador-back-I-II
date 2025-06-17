import { cartsRepository,  } from "../repositories/repository.js";

const addProductService = async (data) => await cartsRepository.createOne(data);
const readCartService = async (filter) => await cartsRepository.readAll(filter);

export {addProductService, readCartService}