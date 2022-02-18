import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MovieCardContainer = styled(Stack, {
  shouldForwardProp: (prop) => !["urlImage"].includes(prop),
})(({ theme, urlImage }) => ({
  borderRadius: theme.shape.borderRadius,
  position: "relative",
  padding: theme.spacing(2),
  width: "100%",
  height: "440px",
  background: urlImage ? `url(${urlImage})` : "none",
  backgroundSize: "100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  transition: theme.transitions.create(["background-size"], {
    duration: theme.transitions.duration.standard,
  }),
  "&:hover": {
    backgroundSize: "110%",
  },
}));

export const MovieCardFilter = styled("div")({
  borderRadius: "inherit",
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  zIndex: "1",
  background: "linear-gradient(transparent, rgba(0, 0, 0, 1))",
});
