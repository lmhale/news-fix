import * as express from 'express';
import {Request, Response} from "express";
import { appendFile } from 'fs';
import { Favorite} from '../entities/Favorite';
import {getManager} from "typeorm";
import { User } from '../entities/User';
const router = express.Router();


/*routes

post  /favorites/:userId/
get   /favorites/:userId
delete /favorites/:userId/:id 
put /favorites/:userId/:id
*/


router.get('/favorites/:userId',async function(req: Request, res: Response) {

    // let allFavorites = await Favorite.find({ select: ["title", "lastName","email", "isActive"] })
     return res.send('all favorites')
  });

  export {
      router as favoriteRouter
  }

  router.post('/favorites/:userId',async function(req: Request, res: Response) {
       
        const {
            title,
            description,
            url,
            image,
            source,
            author,
            category,
            publishedAt
        } = req.body
        const newFave = await Favorite.create({
            title:title,
            description:description,
            url:url,
            image:image,
            source:source,
            author:author,
            category:category,
            publishedAt:publishedAt
         })
       const foundUser =  await User.findOne({id:req.params.userId} )
       
         newFave.users = [foundUser]

         await newFave.save()
        return res.json(newFave)
  })