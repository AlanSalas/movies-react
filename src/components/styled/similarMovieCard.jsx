import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";

export const SimilarMovieCardContainer = styled(Stack)(({ theme }) => ({
  background: "#2f2f2f",
  borderRadius: theme.shape.borderRadius,
}));

export const SimilarMovieImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "200px",
}));

export const SimilarMovieInfo = styled("div")(({ theme }) => ({
  background: "inherit",
  padding: theme.spacing(3),
  color: "white",
}));
