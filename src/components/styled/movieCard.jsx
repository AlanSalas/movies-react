import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

export const MovieCardContainer = styled(Stack, {
  shouldForwardProp: (prop) => !["urlImage"].includes(prop),
})(({ theme, urlImage }) => ({
  position: "relative",
  padding: theme.spacing(2),
  width: "100%",
  height: "440px",
  background: urlImage ? `url(${urlImage})` : "none",
  backgroundSize: "cover",
}));

export const MovieCardFilter = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  zIndex: "1",
  backgroundColor: "rgba(0, 0, 0, .3)",
});

export const MovieLink = styled(Link)({
  textDecoration: "none",
  color: "white",
});
