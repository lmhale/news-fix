import * as express from 'express';
import {Request, Response} from "express";
import { User } from '../entities/User';
const router = express.Router();

router.get('/users',async function(req: Request, res: Response) {

  let allUsers = await User.find({ select: ["firstName", "lastName","email", "isActive"] })
   return res.json(allUsers)
});

router.get('/users/:id', async function(req: Request, res: Response) {
    let paramsId = req.params.id
  const oneUser = await User.find({
        where:{
            id:paramsId
        }
    })
   return res.json(oneUser)
})

router.post("/users", async function(req: Request, res: Response) {
   const {
       firstName,
       lastName,
       password,
       isActive,
       email
   } = req.body
   const user = new User()
   user.firstName = firstName
   user.lastName = lastName
   user.password = password
   user.isActive = isActive
   user.email = email
   await User.save(user)
   return res.json(user)
});

router.put("/users/:id", function(req: Request, res: Response) {
  
});

router.delete("/users/:id", function(req: Request, res: Response) {
    // here we will have logic to delete a user by a given user id
});


export {
    router as userRouter
}