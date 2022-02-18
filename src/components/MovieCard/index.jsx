// React
import { useEffect, useState } from "react";
// Components
import { Chip, Typography, Box } from "@mui/material";
// StyledComponents
import { MovieCardContainer, MovieCardFilter } from "../styled/movieCard";
// Services
import { getGenres } from "../../api/movies";

const MovieCard = ({ title, id, poster_path, genre_ids, handleOpenModal }) => {
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
          sx={{ bgcolor: "primary.main", color: "text.white", fontWeight: "bold", mb: 2 }}
          label={genre && genre[0].name}
        />
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "text.white",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            mb: 2,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ color: "text.white", cursor: "pointer" }}
          onClick={() => handleOpenModal(id)}
          component="span"
        >
          See More
        </Typography>
      </Box>
    </MovieCardContainer>
  );
};

export default MovieCard;
