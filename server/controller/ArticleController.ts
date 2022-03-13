import {getRepository} from "typeorm"; 
import {NextFunction, Request, Response} from "express"; 
import {Article} from "../entity/Article"; 

export class ArticleController {

   private articleRepository = getRepository(Article); 
   
   async all(request: Request, response: Response, next: NextFunction) { 
      return this.articleRepository.find(); 
   } 
   
   async one(request: Request, response: Response, next: NextFunction) { 
      return this.articleRepository.findOne(request.params.id); 
   } 
   
   async save(request: Request, response: Response, next: NextFunction) { 
      return this.articleRepository.save(request.body); 
   } 
   
   async remove(request: Request, response: Response, next: NextFunction) { 
      let articleToRemove = await this.articleRepository.findOne(request.params.id); 
      await this.articleRepository.remove(articleToRemove); 
   } 
}