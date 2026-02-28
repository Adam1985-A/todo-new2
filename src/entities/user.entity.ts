import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import TodoEntity from "./todo.entity.js";


@Entity()
export class UserEntity{
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", unique: true, nullable: true})
  name!: string;

  @Column({ type: "varchar", unique: true})
  email!: string;

  @Column({ type: "varchar"})
  password!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  createdAt!: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP"})
  updatedAt!: Date;

 @OneToMany(()=> TodoEntity, (todo)=> todo.user)
 todos!: Promise<TodoEntity[]>;


}

export default UserEntity;