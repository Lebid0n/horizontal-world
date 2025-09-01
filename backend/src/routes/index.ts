import { Router } from "express";
import { UserController } from "../controllers/userController";

const router = Router();
const userController = new UserController();

router.get("/", userController.getRoot.bind(userController));

router.get("/users", userController.getAllUsers.bind(userController));
router.post("/users", userController.createUser.bind(userController));

export default router;
