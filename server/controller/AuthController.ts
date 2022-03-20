import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import { getRepository } from "typeorm";
import * as jwt from "jsonwebtoken"
import { verifyJWT } from "../middleware/checkAuth";
import console from "console";



class AuthController {

  static LoginPost = async (request: Request, response: Response) => {

    try {

      const userRepository = getRepository(User);
      const { email, passwordHash, id } = request.body;


      if (!(email && passwordHash )) {
        return response.status(400).send("Incorrect username or password");
      }
      // Check if user exists

      const user = await userRepository.findOne({ where: { email } });
    
      if (!user) {
        return response.status(404).send("Incorrect username or password");
      }

      // Check if encrypted password match
      if (!user.checkIfPasswordIsValid(passwordHash)) {
        return response.status(404).send("Incorrect username or password");
      }

      let Id = user.id
      const token = await jwt.sign({
        Id
      }, process.env.SECRET, { expiresIn: '10hr' })
    
    
    //  response.cookie('jwt',token, {maxAge: 1000 * 60 *60 *24})
    
      response.status(200).json({ token: token, user: user.id })

    } catch (error) {
      console.log(error)
    }

  }

  static SignUpPost = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { email, passwordHash } = request.body;
      const newUser = new User()

      newUser.passwordHash = passwordHash
      newUser.email = email
      newUser.hashPassword()
   
      if (!newUser.checkIfValidEmail(email)) {
        return response.status(400).send('not a valid email')
     
      }
      const user = await getRepository(User).findOne({ where: { email: email } })
   
      if (user) {
       return response.status(400).send("a user with that email already exists" )
      } else {
        await getRepository(User).save(newUser);
        let id = await newUser.id 
        const token = await jwt.sign({
          id
        }, process.env.SECRET, { expiresIn: '10hr' })

        response.status(200).json({ token: token, userId: newUser.id })

      }

    } catch (error) {
      console.log(error)
    }
    next()

  }

};

export default AuthController