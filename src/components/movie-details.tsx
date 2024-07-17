import { useEffect, useState } from "react";

import { Movie } from "../services/movie/type";
import { getMovieDetails } from "../services/movie";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>(); // Ambil ID dari URL
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetails(id as string);
        setMovie(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-row gap-8 p-28">
      <img
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt={movie.title}
        className="flex flex-col w-60 shadow-2xl py-3 px-3 bg-slate-50"/>
      <div className="flex flex-col border-slate-300">
        <h1 className="text-2xl font-bold">{movie.title}</h1>
        <p className="text-gray-500"> <strong>Release Date:</strong> {movie.release_date}</p>
        <p className="text-gray-500"> <strong>Popularity:</strong> {movie.popularity}</p>
        <p className="text-gray-500"> <strong>Rating:</strong> {movie.vote_average}</p>
        <p><strong>Original Title:</strong> {movie.original_title}</p>
        <p><strong>Overview:</strong> {movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
