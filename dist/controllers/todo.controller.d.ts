import type { Request, Response } from "express";
export declare class TodoController {
    private service;
    constructor();
    getAllTodos(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getTodoById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    createTodo(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateTodo(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteTodo(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=todo.controller.d.ts.map