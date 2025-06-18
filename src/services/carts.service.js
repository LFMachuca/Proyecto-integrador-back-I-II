import { cartsRepository,  } from "../repositories/repository.js";

const addProductService = async (data) => await cartsRepository.createOne(data);
const readCartService = async (filter) => await cartsRepository.readAll(filter);
const readProductsByService = async (filter) => await cartsRepository.readBy(filter)
const readProductsByIdService = async (id) => await cartsRepository.readById(id);
const updateProductsByIdService = async (id,data) => await cartsRepository.updateById(id,data)
export {addProductService, readCartService,readProductsByService,readProductsByIdService,updateProductsByIdService}