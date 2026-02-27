import AppDataSource from "../database/data-source.js";
import { TodoEntity } from "../entities/todo.entity.js";
export class TodoService {
    constructor() {
        this.todoRepository = AppDataSource.getRepository(TodoEntity);
    }
    async getTodos(userId) {
        return await this.todoRepository.find({
            where: { user: { id: userId } }
        });
    }
    async getTodoById(id, userId) {
        const todo = await this.todoRepository.findOne({
            where: { id, user: { id: userId } }
        });
        if (!todo) {
            throw new Error("Todo not found");
        }
        return { todo };
    }
    async createTodo(payload, userId) {
        const newTodo = this.todoRepository.create({
            ...payload,
            user: { id: userId }
        });
        return await this.todoRepository.save(newTodo);
    }
    async updateTodo(id, payload) {
        const todo = await this.todoRepository.findOneBy({ id });
        if (!todo) {
            throw new Error("Todo not found");
        }
        //merge existing todo with update
        Object.assign(todo, payload);
        return await this.todoRepository.save(todo);
    }
    async deleteTodo(id) {
        const todo = await this.todoRepository.findOneBy({ id });
        if (!todo) {
            throw new Error("Todo not found");
        }
        await this.todoRepository.remove(todo);
        return { message: "Todo deleted successfully" };
    }
}
;
//# sourceMappingURL=todo.service.js.map