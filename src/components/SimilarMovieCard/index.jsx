// Components
import { Typography } from "@mui/material";
// StyledComponents
import {
  SimilarMovieCardContainer,
  SimilarMovieImage,
  SimilarMovieInfo,
} from "../styled/similarMovieCard";
// Assets
import NoImage from "../../assets/no-image.png";

const SimilarMovieCard = ({ backdrop_path, overview }) => {
  const backgroundImage = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  return (
    <SimilarMovieCardContainer>
      <SimilarMovieImage src={backdrop_path ? backgroundImage : NoImage} />
      <SimilarMovieInfo>
        <Typography>{overview}</Typography>
      </SimilarMovieInfo>
    </SimilarMovieCardContainer>
  );
};

export default SimilarMovieCard;
