import { styled } from "@mui/material/styles";

export const Navbar = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "0",
  zIndex: "3",
  width: "100%",
  padding: theme.spacing(2),
  background: theme.palette.tertiary.main,
}));
