import { AuthService } from "../services/auth.service.js";
import type { Request, Response } from "express";

export class AuthController {
  private service = new AuthService();
    constructor(){
      this.service = new AuthService();
      this.register = this.register.bind(this);
      this.login = this.login.bind(this);
    }

    async register(req: Request, res: Response){
      const {name, email, password} = req.body;
      try {
        const newUser = await this.service.register(name, email, password);
        res.status(201).json(newUser);
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "An error occurred";
        res.status(400).json({message});
      }
        
    }

    async login(req: Request, res: Response){
      try{
      const { email, password } = req.body;

      if(!email || !password){
        return res.status(400).json({message: "email and password are required"});
      }

      const token = await this.service.login(email, password);
      return res.status(200).json({token});

      }catch (error: unknown) {
        const message = error instanceof Error ? error.message : "An error occurred";
       return res.status(401).json({message});
      }
    }
  }