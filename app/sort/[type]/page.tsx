import React, { use } from "react";
import { getMovies, MovieType } from "@/utils/getMovies";
import { getMovieImage } from "@/utils/getMovieImage";
import HomeMovieItem from "@/app/components/homeMovieItem";

type Props = { params: { type: MovieType } };
type Params = {
  title: string;
  type: MovieType;
};
type ParamsMapper = {
  now: Params;
  upcoming: Params;
  popular: Params;
  "top-rated": Params;
};
const paramsMapper: ParamsMapper = {
  now: { title: "Movies Playing Now", type: "now_playing" },
  upcoming: { title: "Upcoming Movies", type: "upcoming" },
  popular: { title: "Popular Movies", type: "popular" },
  "top-rated": { title: "Top Rated Movies", type: "top_rated" },
};

const Page: React.FC<Props> = ({ params }) => {
  const { type } = params;

  // @ts-ignore
  const movieType = paramsMapper[type].type;
  const movies = use(getMovies(movieType));
  const movieIds = movies.results.map((movie: any) => movie.id);
  const moviesData = movieIds.map((id: any) => {
    const moviePoster = use(getMovieImage(id));

    const posterPath = moviePoster.posters[0]
      ? `https://image.tmdb.org/t/p/w185${moviePoster.posters[0].file_path}`
      : "/images/not_found.jpg";

    return { id, posterPath };
  });
  return (
    <div className={"flex flex-wrap gap-10 justify-center p-10"}>
      {moviesData.map((data: any) => (
        <HomeMovieItem
          key={data.id}
          id={data.id}
          posterPath={data.posterPath || "/images/not_found.jpg"}
        />
      ))}
    </div>
  );
};

export default Page;
