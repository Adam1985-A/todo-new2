import { TodoEntity } from "../entities/todo.entity.js";
export declare class UserEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    todos: TodoEntity[];
}
export default UserEntity;
//# sourceMappingURL=user.entity.d.ts.map