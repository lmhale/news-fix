import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { IsEmail, isEmail } from "class-validator";
import { Favorite } from "./Favorite";
import * as bcrypt from "bcrypt";


@Entity({name:"user", synchronize:true})
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  // @Column()
  // firstName:string;

  // @Column()
  // lastName: string;

  @Column({nullable:false})
  passwordHash:string
  


  @Column({
    unique: true, nullable:false})
    email: string;

  @OneToMany(type => Favorite, favorite => favorite.users)
   favorites: Favorite[]


public hashPassword() {
  this.passwordHash = bcrypt.hashSync(this.passwordHash, 8);
}
public checkIfPasswordIsValid(unencryptedPassword: string) {
  return bcrypt.compareSync(unencryptedPassword, this.passwordHash);
}

public checkIfValidEmail(email:string){
  let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return(email.match(validEmail))
}

}