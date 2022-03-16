import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from 'express';

export const verifyJWT = async (request: Request, response: Response, next: NextFunction) => {

    const token = request.header('x-auth-token')
    if(!token){
       return response.send("No Token Found")
    }
    
    try {
      let   jwtPayload = jwt.verify(token, process.env.SECRET) as any
         response.locals.jwtPayload = jwtPayload;
        next()
    } catch (error) {
        response.status(401).send("Not a valid token")
    }
    
}
export default verifyJWT