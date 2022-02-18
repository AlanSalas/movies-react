// React
import { useEffect, useState } from "react";
// Components
import { Chip, Stack, Typography } from "@mui/material";
// StyledComponents
import { BannerContainer, BannerFilter, BannerButton } from "../styled/home";
// Services
import { getGenres } from "../../api/movies";

const Banner = ({ backgroundUrl, title, overview, genre_ids }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres(genre_ids).then((result) => {
      setGenres(result);
    });
  }, []);

  return (
    <BannerContainer backgroundUrl={backgroundUrl}>
      <BannerFilter />
      <Stack sx={{ position: "relative", zIndex: "2" }} alignItems="flex-start">
        <Stack direction="row">
          {genres &&
            genres.map((genre) => (
              <Chip
                key={genre[0].id}
                sx={{
                  mb: 2,
                  mr: 1,
                  bgcolor: "primary.main",
                  color: "text.white",
                  fontWeight: "bold",
                }}
                label={genre[0].name}
              />
            ))}
        </Stack>
        <Typography variant="h3" sx={{ mb: 2, fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography sx={{ mb: 2, maxWidth: "50%", textAlign: "left" }} variant="body1">
          {overview}
        </Typography>
        <BannerButton>See More</BannerButton>
      </Stack>
    </BannerContainer>
  );
};

export default Banner;
