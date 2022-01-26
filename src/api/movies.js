import API from "./config";

export const getTrendingMovies = async () => {
  const trendingMovies = await API.get(
    "/trending/movie/week?api_key=724c836853bcf58c4a7bb2020c21e21e"
  );
  return trendingMovies.data.results;
};
