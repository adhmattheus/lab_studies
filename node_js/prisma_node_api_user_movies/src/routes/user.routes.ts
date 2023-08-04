import { CreateUserConttoler } from "../modules/users/useCases/createUser/createUserConttroler";
import { Router } from "express";
import { GetAllUsersController } from "../modules/users/useCases/getAllUsers/getAllUsersController";

const createUserConttroler = new CreateUserConttoler();
const getAllUsersController = new GetAllUsersController();

const userRoutes = Router();

userRoutes.post("/", createUserConttroler.handle);
userRoutes.get("/", getAllUsersController.handle);

export { userRoutes };