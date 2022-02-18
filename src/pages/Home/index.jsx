// React
import { useState, useEffect } from "react";
// Components
import { Typography, Grid } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import Banner from "../../components/Banner";
import MovieCard from "../../components/MovieCard";
import InfoModal from "../../components/InfoModal";
import MovieDetails from "../../components/MovieDetails";
// StyledComponents
import { Container } from "../../components/styled/shared";
// Services
import { getTrendingMovies, getTopRatedMovies } from "../../api/movies";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [movieId, setMovieId] = useState(null);
  const [openInfoModal, setOpenInfoModal] = useState(false);

  useEffect(() => {
    getTrendingMovies().then((data) => {
      setTrendingMovies(data);
    });
    getTopRatedMovies().then((data) => {
      setTopRatedMovies(data.splice(16, 3));
    });
  }, []);

  const handleOpenModal = (id) => {
    setOpenInfoModal(true);
    setMovieId(id);
  };
  const handleCloseModal = () => setOpenInfoModal(false);

  return (
    <>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {topRatedMovies &&
          topRatedMovies.map((movie) => (
            <Banner
              key={movie.id}
              {...movie}
              backgroundUrl={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            />
          ))}
      </Carousel>
      <Container>
        <Typography sx={{ my: 2, color: "text.white" }} variant="h5">
          Trending Movies
        </Typography>
        <Grid container spacing={2}>
          {trendingMovies &&
            trendingMovies.map((movie) => (
              <Grid key={movie.id} item xs={12} sm={6} md={3}>
                <MovieCard {...movie} handleOpenModal={handleOpenModal} />
              </Grid>
            ))}
        </Grid>
        <InfoModal open={openInfoModal} handleCloseModal={handleCloseModal}>
          <MovieDetails movieId={movieId} />
        </InfoModal>
      </Container>
    </>
  );
};

export default Home;
