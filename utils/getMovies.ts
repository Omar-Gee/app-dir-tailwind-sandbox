export const getMovies = async () => {
  let res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.THE_MOVIE_DB_API_KEY}`
  );

  return res.json();
};
