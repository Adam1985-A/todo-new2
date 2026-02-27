import { UserEntity } from "../entities/user.entity.js";
export declare class TodoEntity {
    id: number;
    title: string;
    completed: "boolean";
    description: string;
    createdAt: Date;
    updatedAt: Date;
    user: UserEntity;
}
export default TodoEntity;
//# sourceMappingURL=todo.entity.d.ts.map