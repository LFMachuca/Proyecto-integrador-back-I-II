

class DaoFs{
    constructor(){}
    createOne = () =>{};
    readAll = () =>{};
    readById = () =>{};
    readBy = () =>{};
    updateById = () =>{};
    destroyById = () =>{};
}

const productsManager = new DaoFs();
const cartsManager = new DaoFs();
const usersManager = new DaoFs();

export { productsManager, cartsManager, usersManager };