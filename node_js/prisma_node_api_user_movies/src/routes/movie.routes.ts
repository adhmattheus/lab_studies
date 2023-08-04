import { Router } from "express";
import { CreateMovieRentController } from "../modules/movieRent/CreateMovieRentController";
import { GetMovieByReleaseDateController } from "../modules/movies/useCases/getMovieByReleaseDate/GetMovieByReleaseDateController";

const createMovieController = new CreateMovieRentController();
const getMoviesByReleaseDateController = new GetMovieByReleaseDateController
const createMovieRentController = new CreateMovieRentController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/release", getMoviesByReleaseDateController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);

export { movieRoutes };