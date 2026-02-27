import { UserEntity } from "../entities/user.entity.js";
export declare class AuthService {
    private userRepository;
    register(name: string, email: string, password: string): Promise<UserEntity>;
    login(email: string, password: string): Promise<{
        token: string;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map