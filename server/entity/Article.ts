import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    PrimaryColumn,
  } from "typeorm";
  import { Favorite } from "./Favorite";

export enum CategoryType {
    BUSINESS = "business",
    ENTERTAINMENT = "entertainment",
    GENERAL = "general",
    HEALTH = "health",
    SCIENCE = "science",
    SPORTS = "sports",
    TECHNOLOGY = "technology",
  }
  @Entity("article")
  export class Article {
    @PrimaryColumn()
    id:string;

    @Column()
    title: string;
    @Column()
    description: string;
    @Column()
    url: string;
    @Column({
        nullable: true,
    })
    urlToImage: string;
  
    @Column()
    source: string;
  
    @Column({
      nullable: true,
    })
    author: string;
    @Column({
      type: "enum",
      enum: CategoryType,
      default: CategoryType.GENERAL,
    })
    category: CategoryType;
    @Column()
    publishedAt: Date;
  
    @OneToMany(type => Favorite, favorite => favorite.articles, {
       
    })
    favorites: Favorite[];
  }