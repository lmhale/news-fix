import { createConnection, getConnectionOptions, getManager } from "typeorm";
import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import { Request, Response } from "express";
import { Routes } from "./routes";
import allRoutes from './routes/allRoutes'
import cookieParser from "cookie-parser"
import { User } from "./entity/User";
import { Favorite } from "./entity/Favorite";
import { Article } from "./entity/Article";
import path from "path";


const main = async () => {
  try {
    const app = express();
    //middleware
    app.use(bodyParser.json());
    app.use(cookieParser())
    app.use(express.json());
    app.use(cors())
    app.use(express.static(path.join(__dirname, 'build')));
    const connectionOptions = await getConnectionOptions();
    await createConnection({
      ...connectionOptions,
      entities: [User, Favorite, Article],
    });
    console.log("successfully connected to DB");
    
    app.use('/', allRoutes)
    
  //   app.get("/", (req, res) =>
  //   res.sendFile(path.join(__dirname, "..", "public/index.html"))
  // );

    // Routes.forEach((route) => {
    //   (app as any)[route.method](
    //     route.route,
    //     (req: Request, res: Response, next: Function) => {
    //       const result = new (route.controller as any)()[route.action](
    //         req,
    //         res,
    //         next
    //       );
    //       if (result instanceof Promise) {
    //         result.then((result) =>
    //           result !== null && result !== undefined
    //             ? res.send(result)
    //             : undefined
    //         );
    //       } else if (result !== null && result !== undefined) {
    //         console.log(result);
    //       }
    //     }
    //   );
    // });

    app.listen(3000, () => {
      console.log("Now running on port 3000");
    });
  } catch (error) {
    console.error(error);
    throw new Error("unable to connect to database");
  }
};
main();
