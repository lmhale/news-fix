import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
} from "typeorm";
import { Article } from "./Article";
import { User } from "./User";


@Entity("favorite")
export class Favorite {

@PrimaryColumn()
  userId:string
@PrimaryColumn()
  articleId:string
// @Column()
// url:string

// @Column()
// title:string

// @Column({nullable:true})
// image:string


  @ManyToOne(type => User, user => user.favorites, {  primary:true, cascade:true })
  @JoinColumn({name:"userId"})
 users: User[];

 @ManyToOne(type => Article, article => article.favorites, {primary:true})
 @JoinColumn({name:"articleId"})
 articles:Article[];
}
