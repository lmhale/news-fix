import { createConnection, getConnectionOptions } from "typeorm";
import { User } from "./entities/User";
import { Favorite } from "./entities/Favorite"


const main = async () => {
    
  try {
    const connectionOptions = await getConnectionOptions();
    await createConnection({
        ...connectionOptions,
        entities:[
            User,
            Favorite
        ]
    });
    console.log("successfully connected to DB")
  } catch (error) {
    console.error(error)
    throw new Error("unable to connect to database")
  }
  
};
main();
