import { TodoEntity } from "../entities/todo.entity.js";
export declare class TodoService {
    private todoRepository;
    getTodos(userId: number): Promise<TodoEntity[]>;
    getTodoById(id: number, userId: number): Promise<{
        todo: TodoEntity;
    }>;
    createTodo(payload: any, userId: number): Promise<TodoEntity[]>;
    updateTodo(id: number, payload: any): Promise<TodoEntity>;
    deleteTodo(id: number): Promise<{
        message: string;
    }>;
}
//# sourceMappingURL=todo.service.d.ts.map