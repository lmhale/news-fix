import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
export class Favorite {
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
}
