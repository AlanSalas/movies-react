import { styled } from "@mui/material/styles";

export const BannerContainer = styled("div", {
  shouldForwardProp: (prop) => !["backgroundUrl"].includes(prop),
})(({ theme, backgroundUrl }) => ({
  position: "relative",
  width: "100%",
  height: "648px",
  color: theme.palette.text.white,
  padding: theme.spacing(10, 10),
  background: backgroundUrl ? `url(${backgroundUrl})` : "none",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

export const BannerFilter = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  zIndex: "1",
  backgroundColor: theme.palette.filters.dark,
}));

export const BannerButton = styled("button")(({ theme }) => ({
  outline: "none",
  cursor: "pointer",
  color: theme.palette.text.white,
  fontWeight: "bold",
  padding: theme.spacing(2, 5),
  background: "transparent",
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: theme.spacing(5),
  transition: theme.transitions.create(["background"], {
    duration: theme.transitions.duration.standard,
  }),
  "&:hover": {
    background: theme.palette.primary.main,
  },
}));
