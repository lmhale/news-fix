import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import { getRepository } from "typeorm";
import * as jwt from "jsonwebtoken"

export class AuthController { 
    
    public static login = async (request: Request, response: Response) => {
          const { email, password } = request.body;
          const userRepository = getRepository(User);
          
          if (!(email && password)) {
            response.status(400).send();
          }
      
          // Check if user exists
          const user = await userRepository.findOne({ where: { email } });
          if (!user) {
            return response.status(404).send("Incorrect username or password");
          }
          // Check if encrypted password match
          if (!user.checkIfPasswordIsValid(password)) {
            return response.status(404).send("Incorrect username or password");
          }
          
          const token = await jwt.sign({
              email
          },'sdkfjdlsfkjldskfjdskl', { expiresIn:'10hr'})
        
          response.json({token: token})
        }
    };
        
    