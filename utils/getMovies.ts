export type MovieType = "upcoming" | "now_playing" | "popular" | "top_rated";
export const getMovies = async (type: MovieType) => {
  const url = `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.THE_MOVIE_DB_API_KEY}&region=NL`;

  let res = await fetch(url);

  return res.json();
};
