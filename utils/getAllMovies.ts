import { getMovies } from "@/utils/getMovies";

export const getAllMovies = async () => {
  const upcoming = getMovies("upcoming");
  const popular = getMovies("popular");
  const nowPlaying = getMovies("now_playing");
  const topRated = getMovies("top_rated");
  const [upcomingRes, nowPlayingRes, popularRes, topRatedRes] =
    await Promise.all([upcoming, nowPlaying, popular, topRated]);
  const upcomingMovies = upcomingRes.results.map((movie: any) => movie);
  const nowPlayingMovies = nowPlayingRes.results.map((movie: any) => movie);
  const popularMovies = popularRes.results.map((movie: any) => movie);
  const topRatedMovies = topRatedRes.results.map((movie: any) => movie);
  const allMovies = [
    ...upcomingMovies,
    ...nowPlayingMovies,
    ...popularMovies,
    ...topRatedMovies,
  ];

  return allMovies;
};
