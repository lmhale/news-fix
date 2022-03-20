import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from 'express';

export const verifyJWT = async (request: Request, response: Response, next: NextFunction) => {


    const token = await request.headers["x-access-token"]
    console.log('TOKEN', request.headers)
    if(!token){
       return response.send("No Token Found")
    }else{
        
        response.redirect('/')
    }
    next()
    // try {
    //   let  jwtPayload = jwt.verify(token, process.env.SECRET) as any
    //      response.locals.jwtPayload = jwtPayload;
    //      console.log("VERIFIED")
    //     next()
    // } catch (error) {
    //     response.status(401).send("Not a valid token")
    // }
    
}



