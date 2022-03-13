import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BaseEntity } from "typeorm";
import { Favorite } from "./Favorite";

@Entity("user")
export class User extends BaseEntity{
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstName:string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column()
  isActive: boolean;
  @Column({
    unique: true
  })
  email: string;

  @ManyToMany(type => Favorite, favorite => favorite.users)
  favorites: Favorite[]

}
