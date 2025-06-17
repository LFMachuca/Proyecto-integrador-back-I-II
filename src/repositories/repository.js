import { cartsManager, productsManager, usersManager} from "../DAO/factory.js"
import UsersDTO from "../DTO/users.dto.js"
import ProductsDTO from "../DTO/products.dto.js"
import CartsDTO from "../DTO/carts.dto.js";
class Repository{
    constructor(manager,Dto){
        this.manager = manager;
        this.Dto = Dto
    }

    createOne = async (data) => await this.manager.createOne(new this.Dto(data));

    readAll = async (filter) => await this.manager.readAll(filter); 
  
    readById = async (id) => await this.manager.readById({ _id: id });
  
    readBy = async (filter) => await this.manager.readBy(filter);
  
    updateById = async (id, data) =>
      await this.manager.updateById(id, data, { new: true });
  
    destroyById = async (id) => await this.manager.destroyById(id);

    updateOne = async (id,value ) => {
      await this.manager.updateOne(id)
    }
}

const productsRepository = new Repository(productsManager, ProductsDTO);
const usersRepository = new Repository(usersManager, UsersDTO);
const cartsRepository = new Repository(cartsManager, CartsDTO);
export {productsRepository, usersRepository, cartsRepository};