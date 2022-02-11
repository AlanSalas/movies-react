import React, { useState, useEffect } from "react";
import { getTrendingMovies, getTopRatedMovies } from "../../api/movies";
import { Typography, Grid } from "@mui/material";
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
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {topRatedMovies &&
          topRatedMovies.map((movie) => (
            <Banner
              key={movie.id}
              {...movie}
              backgroundUrl={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            />
          ))}
      </Carousel>
      <Typography sx={{ my: 2 }} variant="h5">
        Trending Movies
      </Typography>
      <Grid container spacing={2}>
        {trendingMovies &&
          trendingMovies.map((movie) => (
            <Grid key={movie.id} item xs={12} sm={6} md={3}>
              <MovieCard {...movie} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Home;
