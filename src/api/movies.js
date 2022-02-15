import API from "./config";

const API_KEY = "724c836853bcf58c4a7bb2020c21e21e";

export const getTrendingMovies = async () => {
  const trendingMovies = await API.get(`/trending/movie/week?api_key=${API_KEY}`);
  return trendingMovies.data.results;
};

export const getTopRatedMovies = async () => {
  const topRatedMovies = await API.get(`/movie/top_rated?api_key=${API_KEY}`);
  return topRatedMovies.data.results;
};

export const getGenres = async (genreIds) => {
  const result = await API.get(`/genre/movie/list?api_key=${API_KEY}`);
  const filteredGenres = genreIds.map((genreId) =>
    result.data.genres.filter((genre) => genre.id === genreId)
  );
  return filteredGenres;
};

export const getDetails = async (movieId) => {
  const details = await API.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return details.data;
};

export const getSimilarMovies = async (movieId) => {
  const similarMovies = await API.get(`movie/${movieId}/similar?api_key=${API_KEY}`);
  return similarMovies.data.results;
};

export const getVideo = async (movieId) => {
  const videos = await API.get(`movie/${movieId}/videos?api_key=${API_KEY}`);
  const filteredVideos = videos.data.results.filter((video) => video.type === "Trailer");
  return filteredVideos[0];
};
