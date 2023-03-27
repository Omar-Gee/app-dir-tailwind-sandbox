import React, { use } from "react";
import Link from "next/link";

const getMovies = async () => {
  let res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.THE_MOVIE_DB_API_KEY}`
  );

  return res.json();
};

type Props = { children: any };

const Layout: React.FC<Props> = ({ children }) => {
  const movies = use(getMovies());

  return (
    <div className={"flex "}>
      <ul className={"pr-10 text-sm flex-none"}>
        {movies.results.map((movie: any) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
