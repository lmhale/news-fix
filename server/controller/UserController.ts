import {getRepository} from "typeorm"; 
import {NextFunction, Request, Response} from "express"; 
import {User} from "../entity/User"; 

export class UserController {

   private userRepository = getRepository(User); 
   
   async all(request: Request, response: Response, next: NextFunction) { 
      return this.userRepository.find(); 
   } 
   
   // async one(request: Request, response: Response, next: NextFunction) { 
   //    return this.userRepository.findOne(request.params.id); 
   // } 
   
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

       return this.userRepository.save(newUser); 
      }

     
   } 
   
   async remove(request: Request, response: Response, next: NextFunction) { 
      let userToRemove = await this.userRepository.findOne(request.params.id); 
      await this.userRepository.remove(userToRemove); 
   } 
}