import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, BaseEntity, JoinTable } from "typeorm";
import { User } from "./User";



export enum CategoryType {
  BUSINESS= 'business',
  ENTERTAINMENT=  'entertainment',
  GENERAL= 'general',
  HEALTH= 'health',
  SCIENCE ='science',
  SPORTS='sports',
  TECHNOLOGY='technology'
}
@Entity("favorite")
export class Favorite extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  url: string;
  @Column()
  image: string;

  @Column()
  source: string;

  @Column({
    nullable: true,
  })
  author: string;
  @Column({
    type:'enum',
    enum:CategoryType,
    default:CategoryType.GENERAL
  })
  category:CategoryType
  @Column()
  publishedAt:Date;

  @ManyToMany(type => User, user => user.favorites,{
    cascade:true
})
 @JoinTable()
  users:User[]


}
