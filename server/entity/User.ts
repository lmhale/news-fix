import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Favorite } from "./Favorite";

@Entity("user")
export class User {
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

  @OneToMany(type => Favorite, favorite => favorite.users)
   favorites: Favorite[]

}
