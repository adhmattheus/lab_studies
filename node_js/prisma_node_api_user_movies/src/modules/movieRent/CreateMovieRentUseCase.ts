import { AppError } from "../../errors/AppError";
import { prisma } from "../../prisma/client";
import { CreateMovieRentDTO } from "./dto/CreateMovieRentDTO";

export class CreateMovieRentUseCase {
	async execute({ movieId, userId }: CreateMovieRentDTO): Promise<void> {
		//verificar se o filme existe
		const movieExists = await prisma.movie.findUnique({
			where: {
				id: movieId
			}
		});

		if (!movieExists) {
			throw new AppError("Movie does not exists !");
		}

		//verificar se o filme já está alugado
		const movieAlreadyRented = await prisma.movieRent.findFirst({
			where: {
				movieId
			}
		});
		if (movieAlreadyRented) {
			throw new AppError("Movie already rented !");
		}

		//verificar se o ususario existe
		const userExists = await prisma.user.findUnique({
			where: {
				id: userId
			}
		});
		if (!userExists) {
			throw new AppError("User already exists !");
		}

		//locacao
		await prisma.movieRent.create({
			data: {
				movieId,
				userId
			}
		});

	}
}