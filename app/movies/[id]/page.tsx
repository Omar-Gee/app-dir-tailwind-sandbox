import React, { use } from "react";

const getMovie = async (id: string) => {
  let res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.THE_MOVIE_DB_API_KEY}`
  );

  return res.json();
};

type Props = { params: any };

const Movie: React.FC<Props> = ({ params }) => {
  const movie = use(getMovie(params.id));
  return (
    <div>
      <p className={"text-3xl"}>{movie.original_title}</p>
      <p className={"mt-2"}>{movie.release_date}</p>
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
