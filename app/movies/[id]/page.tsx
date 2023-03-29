import React, { use } from "react";
import Image from "next/image";
import { getMovieImage } from "@/utils/getMovieImage";
import { getMovieDetails } from "@/utils/getMovieDetails";

const getMovie = async (id: string) => {
  const [movie, images] = await Promise.all([
    getMovieDetails(id),
    getMovieImage(id),
  ]);

  const posterUrl = `https://image.tmdb.org/t/p/w185/${images.posters[0].file_path}`;
  return { ...movie, posterUrl };
};

type Props = { params: any };

const Movie: React.FC<Props> = ({ params }) => {
  const movie = use(getMovie(params.id));

  return (
    <div>
      <div className={"w-48 relative h-72"}>
        <Image
          src={movie.posterUrl}
          alt={"movie"}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <p className={"text-3xl"}>{movie.original_title}</p>
      <p className={"mt-2"}>Release date: {movie.release_date}</p>
      <p className={"mt-2"}>{movie.overview}</p>
    </div>
  );
};

export default Movie;

export async function generateStaticParams() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=e4935b3091326c5c0a624326773a41e9`
  );
  const movies = await res.json();

  return movies.results.map((movie: any) => ({ id: movie.id }));
}
