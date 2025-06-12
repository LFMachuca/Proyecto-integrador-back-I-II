

class DaoMemory{
    constructor(){}

    createOne = () =>{};
    readAll = () =>{};
    readById = () =>{};
    readBy = () =>{};
    updateById = () =>{};
    destroyById = () =>{};
}

const productsManager = new DaoMemory();
const cartsManager = new DaoMemory();
const usersManager = new DaoMemory();

export { productsManager, cartsManager, usersManager };