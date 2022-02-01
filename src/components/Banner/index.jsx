import React, { useEffect, useState } from "react";
import { getGenres } from "../../api/movies";
import { Chip, Stack, Typography } from "@mui/material";
import { BannerContainer, BannerButton } from "../styled/home";

const Banner = ({ backgroundUrl, title, overview, genre_ids }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres(genre_ids).then((result) => {
      setGenres(result);
    });
  }, []);

  return (
    <BannerContainer backgroundUrl={backgroundUrl}>
      <Stack alignItems="flex-start">
        <Stack direction="row">
          {genres &&
            genres.map((genre) => (
              <Chip
                key={genre[0].id}
                sx={{ mb: 2, mr: 1, background: "rgba(255,255,255, .2)", color: "white" }}
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
