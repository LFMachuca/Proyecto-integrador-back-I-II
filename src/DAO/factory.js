const { PERSISTENCE } = process.env;
import dbConnect from "../helpers/dbConnect.helper.js";

let dao = {};
switch (PERSISTENCE) {
  case "memory":
    {
      console.log("Connected to memory");
        
      const { productsManager, cartsManager, usersManager } = await import(
        "./memory/dao.memory.js"
      );
      dao = { productsManager, cartsManager, usersManager };
    }
    break;

  case "fs":
    {
        console.log("Connected to fs");
      const { productsManager, cartsManager, usersManager } = await import(
        "./fs/dao.fs.js"
      );
      dao = { productsManager, cartsManager, usersManager };
    }
    break;

  default:
    {
      await dbConnect(process.env.LINK_DB);
      const { productsManager, cartsManager, usersManager } = await import(
        "./mongo/dao.mongo.js"
      );
      dao = { productsManager, cartsManager, usersManager };
    }
    break;
}

const { productsManager, cartsManager, usersManager } = dao;
export { productsManager, cartsManager, usersManager };
export default dao;
