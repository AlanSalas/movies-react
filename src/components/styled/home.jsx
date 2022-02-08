import { styled } from "@mui/material/styles";

export const BannerContainer = styled("div", {
  shouldForwardProp: (prop) => !["backgroundUrl"].includes(prop),
})(({ theme, backgroundUrl }) => ({
  position: "relative",
  width: "100%",
  height: "648px",
  color: theme.palette.common.white,
  padding: theme.spacing(10, 10),
  background: backgroundUrl ? `url(${backgroundUrl})` : "none",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

export const BannerFilter = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  zIndex: "1",
  backgroundColor: "rgba(0, 0, 0, .5)",
});

export const BannerButton = styled("button")(({ theme }) => ({
  outline: "none",
  cursor: "pointer",
  color: theme.palette.common.white,
  fontWeight: "bold",
  border: "none",
  padding: theme.spacing(2, 5),
  background: "transparent",
  border: "2px solid #0e3fa9",
  borderRadius: theme.spacing(5),
  "&:hover": {
    background: "rgba(37, 150, 197, .2)",
  },
}));
