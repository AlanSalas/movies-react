import { styled } from "@mui/material/styles";

export const InfoModalContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  background: theme.palette.background.paper,
  border: "2px solid #000",
  boxShadow: 24,
  padding: theme.spacing(4),
  maxHeight: "90vh",
  overflow: "auto",
}));
