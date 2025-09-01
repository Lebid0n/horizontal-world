import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

export class UserController {
  async getAllUsers(_req: Request, res: Response) {
    try {
      const userRepository = AppDataSource.getRepository(User);
      const users = await userRepository.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
      const userRepository = AppDataSource.getRepository(User);

      const user = new User();
      user.name = name;
      user.email = email;

      const savedUser = await userRepository.save(user);
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async getRoot(_req: Request, res: Response) {
    try {
      const userRepository = AppDataSource.getRepository(User);
      const userCount = await userRepository.count();

      res.json({
        message: "Welcome to the TypeORM + Express API!",
        users_in_database: userCount,
        timestamp: new Date().toISOString(),
        status: "OK",
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}
