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
      const newFavorite = new Favorite();
      let ID = request.body.publishedAt + request.body.title + request.body.source;
      const newArticle = new Article();
      newArticle.id = ID;
      newArticle.author = request.body.author;
      newArticle.category = request.body.category;
      newArticle.description = request.body.description;
      newArticle.image = request.body.image;
      newArticle.title = request.body.title;
      newArticle.url = request.body.url;
      newArticle.publishedAt = request.body.publishedAt;
      newArticle.source = request.body.source;

      newArticle.favorites = [newFavorite];

      await this.articleRepository.save(newArticle);

      newFavorite.userId = request.params.userId;
      newFavorite.articleId = newArticle.id;
      newFavorite.url = newArticle.url;
      newFavorite.image = newArticle.image;
      newFavorite.title = newArticle.title;

      return this.favoriteRepository.save(newFavorite);
    } catch (err) {
      console.log("something went wrong");
    }
  }

  async all(request: Request, response: Response, next: NextFunction) {
    const favs = await this.userRepository.findOne(request.params.userId, {
      relations: ["favorites"],
    });
    return favs.favorites;
  }
//   const question = getRepository(Question);
// question.categories = question.categories.filter(category => {
//     return category.id !== categoryToRemove.id
// })
//await connection.manager.save(question)
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
