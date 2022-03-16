import {UserController} from "./controller/UserController"; 
import {AuthController} from "./controller/AuthController"
 import {FavoriteController} from "./controller/FavoriteController"; 

export const Routes = [{ 
    method: "get",
    route: "/auth",
    controller: AuthController, action:"login"
},{
    method: "get", 
    route: "/users", 
    controller: UserController, action: "all" 
 }, { 
    method: "get", 
    route: "/users/:id", controller: UserController, action: "one" 
 }, { 
    method: "post", 
    route: "/users", 
    controller: UserController, action: "create" 
 }, { 
    method: "delete", 
    route: "/users/:id", 
    controller: UserController,
    action: "remove" 
},{
    method:"post",
    route:"/:userId/favorites",
    controller: FavoriteController, action:"save"
}, {
    method: "get",
    route: "/:userId/favorites",
    controller: FavoriteController, action:"all"
},{
    method:"delete",
    route: "/:userId/favorites/:articleId",
    controller: FavoriteController, action:"remove"
}


];