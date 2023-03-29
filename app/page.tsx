import { use } from "react";
import { getMovies } from "@/utils/getMovies";
import { getMovieImage } from "@/utils/getMovieImage";
import Image from "next/image";
import Link from "next/link";
import VanillaTilt from "vanilla-tilt";
import HomeMovieItem from "@/app/homeMovieItem";

export default function Home() {
  const movies = use(getMovies());
  const movieIds = movies.results.map((movie: any) => movie.id);
  const moviesData = movieIds.map((id: any) => {
    const moviePoster = use(getMovieImage(id));
    const posterPath = `https://image.tmdb.org/t/p/w185${moviePoster.posters[0].file_path}`;
    return { id, posterPath };
  });

  return (
    <main>
      <div>
        <h1 className={"text-6xl text-center p-4 pt-10"}>Upcoming Movies</h1>
        <p className={"text-center p-4 pt-8 pb-8"}>
          Click a movie image to see more details or head over to movies to look
          trough a list.
        </p>
      </div>
      <div className={"flex flex-wrap gap-10 justify-center p-10"}>
        {moviesData.map((data: any) => (
          <HomeMovieItem
            key={data.id}
            id={data.id}
            posterPath={data.posterPath}
          />
        ))}
      </div>
    </main>
  );
}
