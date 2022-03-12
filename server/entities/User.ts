import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Favorite } from "./Favorite";

@Entity("user")
export class User extends BaseEntity {
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

  @ManyToMany(type => Favorite)
  @JoinTable({
      name: "user_favorites", // table name for the junction table of this relation
      joinColumn: {
          name: "user",
          referencedColumnName: "id"
      },
      inverseJoinColumn: {
          name: "favorite",
          referencedColumnName: "id"
      }
  })
  favorite:Favorite[]

}
