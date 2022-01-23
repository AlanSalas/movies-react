// Functions
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LoginContainer = styled(Stack)({
  width: "100%",
  height: "100vh",
});

export const LoginImage = styled("div")({
  width: "70%",
  height: "100%",
});

export const LoginCard = styled("div")(({ theme }) => ({
  width: "30%",
  padding: theme.spacing(10, 5, 5, 5),
}));
