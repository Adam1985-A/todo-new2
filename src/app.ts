import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import AppDataSource from './database/data-source.js';  
import authRoute from "./routes/auth.route.js";
import todoRoute from "./routes/todo.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/auth", authRoute);
app.use("/todos", todoRoute);

await AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});