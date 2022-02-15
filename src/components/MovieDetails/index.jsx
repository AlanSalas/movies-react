import React, { useState, useEffect } from "react";
import { getDetails, getSimilarMovies, getVideo } from "../../api/movies";
import { Typography, Grid } from "@mui/material";
import SimilarMovieCard from "../SimilarMovieCard";

const MovieDetails = ({ movieId }) => {
  const [details, setDetails] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);
  const [video, setVideo] = useState(null);
  const [urlVideo, setUrlVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    getDetails(movieId).then((result) => {
      setDetails(result);
    });
    getSimilarMovies(movieId).then((results) => {
      setSimilarMovies(results);
    });
    getVideo(movieId).then((result) => {
      setVideo(result);
    });
  };

  useEffect(() => {
    setLoading(true);
    getData();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (video) {
      setUrlVideo(`https://www.youtube.com/embed/${video.key}?autoplay=1`);
    }
  }, [video]);

  return (
    <>
      <iframe width="100%" height="300" src={urlVideo}></iframe>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Typography>{details.overview}</Typography>
          {details &&
            details.genres.map((genre) => <Typography key={genre.id}>{genre.name}, </Typography>)}
          <Typography>Similar Movies</Typography>
          <Grid container spacing={2}>
            {similarMovies &&
              similarMovies.map((movie) => (
                <Grid key={movie.id} item xs={12} sm={6} md={4}>
                  <SimilarMovieCard {...movie} />
                </Grid>
              ))}
          </Grid>
        </>
      )}
    </>
  );
};

export default MovieDetails;
