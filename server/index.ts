import { createConnection, getConnectionOptions } from "typeorm";
import express from "express";
import { User } from "./entities/User";
import { Favorite } from "./entities/Favorite";

const app = express();
const main = async () => {
  try {
    const connectionOptions = await getConnectionOptions();
    await createConnection({
      ...connectionOptions,
      entities: [User, Favorite],
    });
    console.log("successfully connected to DB");
    app.use(express.json());
    app.listen(8080, () => {
      console.log("Now running on port 8080");
    });
  } catch (error) {
    console.error(error);
    throw new Error("unable to connect to database");
  }
};
main();
