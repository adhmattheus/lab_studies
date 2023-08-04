import { CreateMovieUseCase } from "./CreateMovieUseCase";
import { Request, Response } from "express";


export class CreateMovieConttroler {
	async handle(req: Request, res: Response) {
		const { title, duration, release_date } = req.body;

		const createMovieUseCase = new CreateMovieUseCase();

		const result = await createMovieUseCase.execute({ title, duration, release_date });

		return res.status(201).json(result);
	}
}