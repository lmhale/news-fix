import { createConnection } from "typeorm";

const main = async () => {
  try {
    await createConnection();
    console.log("successfully connected to DB")
  } catch (error) {
    console.error(error)
    throw new Error("Unable to connect to database")
  }
};
main();
