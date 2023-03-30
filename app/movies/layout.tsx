import React, { use } from "react";
import Link from "next/link";
import { getMovies } from "@/utils/getMovies";
import { getAllMovies } from "@/utils/getAllMovies";

type Props = { children: any };

const Layout: React.FC<Props> = ({ children }) => {
  const allMovies = use(getAllMovies());

  return (
    <div className={"flex p-4 pt-10"}>
      <ul className={"pr-10 text-sm flex-none h-[85vh] overflow-y-scroll"}>
        {allMovies.map((movie: any) => (
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
      <div className={"flex-auto"}>{children}</div>
    </div>
  );
};

export default Layout;
