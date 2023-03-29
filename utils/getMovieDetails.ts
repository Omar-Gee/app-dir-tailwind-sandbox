export const getMovieDetails = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.THE_MOVIE_DB_API_KEY}`
  );
  return res.json();
};
