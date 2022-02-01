import React, { useState, useEffect } from "react";
import { getTrendingMovies, getTopRatedMovies } from "../../api/movies";
import { Typography } from "@mui/material";
import { Container } from "../../components/styled/shared";
import { Carousel } from "react-responsive-carousel";
import Banner from "../../components/Banner";
import MovieCard from "../../components/MovieCard";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then((data) => {
      setTrendingMovies(data);
    });
    getTopRatedMovies().then((data) => {
      setTopRatedMovies(data.splice(16, 3));
    });
  }, []);

  return (
    <Container>
      <Carousel autoFocus autoPlay infiniteLoop showThumbs={false}>
        {topRatedMovies &&
          topRatedMovies.map((movie) => (
            <Banner
              key={movie.id}
              {...movie}
              backgroundUrl={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            />
          ))}
      </Carousel>
      <Typography variant="h5">Trending Movies</Typography>
      {trendingMovies && trendingMovies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
    </Container>
  );
};

export default Home;
