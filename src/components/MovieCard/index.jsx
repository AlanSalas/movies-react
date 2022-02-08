import { useEffect, useState } from "react";
import { getGenres } from "../../api/movies";
import { MovieCardContainer, MovieCardFilter, MovieLink } from "../styled/movieCard";
import { Stack, Chip, Typography, Button, Box } from "@mui/material";

const MovieCard = ({ title, overview, poster_path, genre_ids }) => {
  const [genre, setGenre] = useState(null);
  const urlImage = `https://image.tmdb.org/t/p/original${poster_path}`;

  useEffect(() => {
    getGenres(genre_ids).then((result) => {
      setGenre(result[0]);
    });
  }, []);

  return (
    <MovieCardContainer justifyContent="flex-end" urlImage={urlImage}>
      <MovieCardFilter />
      <Box sx={{ position: "relative", zIndex: "2" }}>
        <Chip
          sx={{ background: "black", color: "white", fontWeight: "bold", mb: 2 }}
          label={genre && genre[0].name}
        />
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "white",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            mb: 2,
          }}
        >
          {title}
        </Typography>
        <MovieLink to="/">See More</MovieLink>
      </Box>
    </MovieCardContainer>
  );
};

export default MovieCard;
