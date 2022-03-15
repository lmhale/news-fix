import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Article } from "../entity/Article";
import { User } from "../entity/User";
import { Favorite } from "../entity/Favorite";
import { threadId } from "worker_threads";

export class FavoriteController {
  favoriteRepository = getRepository(Favorite);
  articleRepository = getRepository(Article);
  userRepository = getRepository(User);

  async save(request: Request, response: Response, next: NextFunction) {
    //create new article
    try {

      await this.articleRepository.save(request.body)

      const userFave = {
          userId: request.params.userId,
          articleId: request.body.id
      } 
      await this.favoriteRepository.save(userFave)

    } catch (err) {
      console.log("something went wrong");
    }
  }

  async all(request: Request, response: Response, next: NextFunction) {
    const faves = await this.favoriteRepository.find(
      {
     
        where:{
        userId:request.params.userId
      },

      relations:["articles"]
  });
   
//  let arts = faves.reduce()
let arts =faves.map(e => {
  return e.articles
})

    return arts
  }

  async remove(request: Request, response: Response, next: NextFunction) {
   const favoriteToRemove = await this.favoriteRepository.findOne({
     where:{
       userId: request.params.userId, 
       articleId: request.params.articleId
    },
   relations:['articles', 'users']
  })

    return this.favoriteRepository.delete(favoriteToRemove)
  }
}
