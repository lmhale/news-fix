import * as express from 'express';
import {Request, Response} from "express";
import { appendFile } from 'fs';
import { Favorite} from '../entities/Favorite';
const router = express.Router();

router.get('/favorites',async function(req: Request, res: Response) {

    // let allFavorites = await Favorite.find({ select: ["title", "lastName","email", "isActive"] })
     return res.send('all favorites')
  });

  export {
      router as favoriteRouter
  }