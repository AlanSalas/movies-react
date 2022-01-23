import React from "react";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const GoogleButton = ({ onClick }) => {
  return (
    <Button
      sx={{ backgroundColor: "#333333", mb: 2, "&:hover": { backgroundColor: "#666666" } }}
      onClick={onClick}
      variant="contained"
      startIcon={<GoogleIcon />}
    >
      Login with Google
    </Button>
  );
};

export default GoogleButton;
