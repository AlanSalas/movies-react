// Components
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const GoogleButton = ({ onClick }) => {
  return (
    <Button
      sx={{ backgroundColor: "grey.800", mb: 2, "&:hover": { backgroundColor: "grey.700" } }}
      onClick={onClick}
      variant="contained"
      startIcon={<GoogleIcon />}
    >
      Login with Google
    </Button>
  );
};

export default GoogleButton;
