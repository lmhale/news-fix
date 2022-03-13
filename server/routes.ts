import {UserController} from "./controller/UserController"; 
 import {FavoriteController} from "./controller/FavoriteController"; 
import {ArticleController} from "./controller/ArticleController"; 

export const Routes = [{ 
    method: "get", 
    route: "/users", 
    controller: UserController, action: "all" 
 }, { 
    method: "get", 
    route: "/users/:id", controller: UserController, action: "one" 
 }, { 
    method: "post", 
    route: "/users", 
    controller: UserController, action: "save" 
 }, { 
    method: "delete", 
    route: "/users/:id", 
    controller: UserController,
    action: "remove" 
}, {
    method:"get",
    route:"/articles",
    controller: ArticleController, action: "all"
}, {
    method:"post",
    route:"/articles",
    controller: ArticleController, action:"save"
},{
    method:"post",
    route:"/:userId/favorites",
    controller: FavoriteController, action:"save"
}

];