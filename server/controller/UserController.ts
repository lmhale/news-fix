import {getRepository} from "typeorm"; 
import {NextFunction, Request, Response} from "express"; 
import {User} from "../entity/User"; 
import * as jwt from "jsonwebtoken";

export class UserController {

   private userRepository = getRepository(User); 
   
   async all(request: Request, response: Response, next: NextFunction) { 
      return this.userRepository.find(); 
   } 
   

   async create(request: Request, response: Response, next: NextFunction) { 
      const { email, passwordHash } = request.body;
      const newUser = new User()
   
      newUser.passwordHash = passwordHash
      newUser.email = email
      newUser.hashPassword()


      const user = await this.userRepository.findOne({where:{email:email}})
      

      if(user){
         response.status(400).send("a user with that email already exists")
      }else{
         await this.userRepository.save(newUser); 
         const token = await jwt.sign({
            email
        },process.env.SECRET, { expiresIn:'10hr'})
      
        response.json({token: token, user:newUser.id})
    
      }

     
   } 
   
   async remove(request: Request, response: Response, next: NextFunction) { 
      let userToRemove = await this.userRepository.findOne(request.params.id); 
      await this.userRepository.remove(userToRemove); 
   } 
}