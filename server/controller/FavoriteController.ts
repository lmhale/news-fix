import {getRepository} from "typeorm"; 
import {NextFunction, Request, Response} from "express"; 
import {Article} from "../entity/Article"; 
import { User } from "../entity/User";
import { Favorite } from "../entity/Favorite";

export class FavoriteController {
    favoriteRepository = getRepository(Favorite); 
    articleRepository = getRepository(Article)
    userRepository = getRepository(User)
    // create new article or find it
    // grab user

    //save to favorites repository
    // user
    // article
    // articleurl
  

    async save(request: Request, response: Response, next: NextFunction) { 
        

           const getArticle = await this.articleRepository.findOne(request.body.id, {relations:["favorites"]})
           const getUser = await this.userRepository.findOne(request.params.userId, {relations:["favorites"]})

         
           const newFavorite = new Favorite()

        //create new article
        const newArticle = new Article()
        newArticle.author = request.body.author,
        newArticle.category = request.body.category
        newArticle.description = request.body.description
        newArticle.image =request.body.image
        newArticle.title = request.body.title
        newArticle.url = request.body.url
        newArticle.publishedAt = request.body.publishedAt
        newArticle.source = request.body.source
       
        newArticle.favorites = [newFavorite]
         //save article
       await this.articleRepository.save(newArticle)
            
     
     
        // getUser.favorites = [newFavorite]
        // this.userRepository.save(getUser)

       
        newFavorite.userId = request.params.userId
        newFavorite.articleId = newArticle.id

    return this.favoriteRepository.save(newFavorite)
            
     }

}