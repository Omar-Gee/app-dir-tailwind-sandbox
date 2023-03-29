import React, { use } from "react";
import Link from "next/link";
import { getMovies } from "@/utils/getMovies";

type Props = { children: any };

const Layout: React.FC<Props> = ({ children }) => {
  const movies = use(getMovies());

  return (
    <div className={"flex p-4 pt-10"}>
      <ul className={"pr-10 text-sm flex-none"}>
        {movies.results.map((movie: any) => (
          <li key={movie.id} className={"pt-2"}>
            <Link
              className={"pt-1 pb-1 transition hover:bg-sky-700"}
              href={`/movies/${movie.id}`}
            >
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
