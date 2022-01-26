import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  maxWidth: theme.breakpoints.values.xl,
  margin: "0 auto",
  //border: "1px solid red"
}));

export const InputStyled = styled("input")(({ theme }) => ({
  outline: "none",
  border: "none",
  background: theme.palette.grey[100],
}));

export const SearchContainer = styled(Stack)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.grey[500]}`,
  padding: theme.spacing(0.5),
  background: theme.palette.grey[100],
}));
