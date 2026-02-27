import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();
import { DataSource } from "typeorm";
import { UserEntity } from "../entities/user.entity.js";
import { TodoEntity } from "../entities/todo.entity.js";
const databaseUrl = process.env.DATABASE_URL; //production ready
if (!databaseUrl) {
    throw new Error("DATABASE_URL is not defined");
}
const AppDataSource = new DataSource({
    type: "postgres",
    url: databaseUrl,
    synchronize: true,
    logging: false,
    ssl: process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false,
    entities: [
        process.env.NODE_ENV === "production"
            ? "dist/entity/*.js"
            : "src/entity/*.ts"
    ],
    migrations: [],
    subscribers: [],
});
export default AppDataSource;
//# sourceMappingURL=data-source.js.map