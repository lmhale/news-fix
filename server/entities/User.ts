import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName:string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;
  @Column({
    unique: true,
  })
  email: string;
}
