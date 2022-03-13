import { createConnection, getConnectionOptions, getManager } from "typeorm";
import express from "express";
import * as bodyParser from 'body-parser';
import { User } from "./entities/User";
import { Favorite } from "./entities/Favorite";
import { userRouter } from "./routes/user_router";
import { favoriteRouter } from "./routes/favorite_router";
const app = express();



const main = async () => {
  try {
    const connectionOptions = await getConnectionOptions();
    await createConnection({
      ...connectionOptions,
      entities: [User, Favorite],
    });
    console.log("successfully connected to DB");
    
    //middleware
    app.use(bodyParser.json())
    app.use(express.json());

    app.use('/api',userRouter, favoriteRouter );

    app.listen(8080, () => {
      console.log("Now running on port 8080");
    });
  } catch (error) {
    console.error(error);
    throw new Error("unable to connect to database");
  }
};
main();
