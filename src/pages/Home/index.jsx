import React, {useState, useEffect} from "react";
import { getTrendingMovies } from "../../api/movies";
import { Typography } from "@mui/material"
import { Container } from "../../components/styled/shared"
import MovieCard from "../../components/MovieCard";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    getTrendingMovies().then(data => {
      setTrendingMovies(data);
    })
  }, [])

  return (
    <Container>
      <Typography variant="h5">Trending Movies</Typography>
      {trendingMovies && trendingMovies.map(movie => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </Container>
  );
};

export default Home;
