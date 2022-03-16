import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import { getRepository } from "typeorm";
import * as jwt from "jsonwebtoken"

export class AuthController { 
     userRepository = getRepository(User);
     async login(request: Request, response: Response) {
          const { email, passwordHash } = request.body;
         
          
          if (!(email && passwordHash)) {
            response.status(400).send();
          }
      
          // Check if user exists
          const user = await this.userRepository.findOne({ where: { email } });
          if (!user) {
            return response.status(404).send("Incorrect username or password");
          }
          // Check if encrypted password match
          if (!user.checkIfPasswordIsValid(passwordHash)) {
            return response.status(404).send("Incorrect username or password");
          }
          
          const token = await jwt.sign({
              email
          },'sdkfjdlsfkjldskfjdskl', { expiresIn:'10hr'})
        
          response.json({token: token})
        }
    };
        
    