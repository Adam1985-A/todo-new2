import express from 'express';
import { AuthController } from '../controllers/auth.controller.js';
const route = express.Router();
const controller = new AuthController();
route.post("/register", controller.register);
route.post("/login", controller.login);
export default route;
//# sourceMappingURL=auth.route.js.map