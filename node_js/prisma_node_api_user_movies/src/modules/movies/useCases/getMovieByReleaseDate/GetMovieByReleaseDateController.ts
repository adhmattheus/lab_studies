
import { Request, Response } from "express";
import { GetMovieByReleaseDateUseCase } from "./GetMovieByReleaseDateUseCase";


export class GetMovieByReleaseDateController {
	async handle(req: Request, res: Response) {
		const { title, duration, release_date } = req.body;

		const getMovieByReleaseDateUseCase = new GetMovieByReleaseDateUseCase();

		const result = await getMovieByReleaseDateUseCase.execute();

		return res.status(201).json(result);
	}
}