import { AuthService } from "../services/auth.service.js";
export class AuthController {
    constructor() {
        this.service = new AuthService();
        this.service = new AuthService();
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
    }
    async register(req, res) {
        const { name, email, password } = req.body;
        try {
            const newUser = await this.service.register(name, email, password);
            res.status(201).json(newUser);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : "An error occurred";
            res.status(400).json({ message });
        }
    }
    async login(req, res) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: "email and password are required" });
            }
            const token = await this.service.login(email, password);
            return res.status(200).json({ token });
        }
        catch (error) {
            const message = error instanceof Error ? error.message : "An error occurred";
            return res.status(401).json({ message });
        }
    }
}
//# sourceMappingURL=auth.controller.js.map