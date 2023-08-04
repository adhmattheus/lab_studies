
import { Request, Response } from "express";
import { GetAllUsersUseCase } from "./getAllUsersUseCase";

export class GetAllUsersController {
	async handle(req: Request, res: Response) {
		const { } = req.body;

		const getAllUsersUseCase = new GetAllUsersUseCase();

		const result = await getAllUsersUseCase.execute();

		return res.status(201).json(result);
	}
}