import React, { useState } from "react";
// Components
import { Stack, Box, Typography, Switch } from "@mui/material";
import GoogleButton from "../../components/GoogleButton";
import { LoginContainer, LoginImage, LoginCard } from "../../components/styled/login";
// Assets
import BackgroundLogin from "../../assets/backgroundlogin.png";
import Logo from "../../assets/logo.png";

const handleLogin = () => {
  console.log("Login...");
};

const Login = () => {
  const [isRemember, setIsRemember] = useState(false);

  return (
    <LoginContainer direction="row">
      <LoginImage>
        <Box sx={{ height: "100%", width: "100%" }} component="img" src={BackgroundLogin} />
      </LoginImage>
      <LoginCard>
        <Stack width="100%" sx={{ textAlign: "left" }}>
          <Box sx={{ width: "150px", margin: "0 auto" }} component="img" src={Logo} />
          <Typography sx={{ fontWeight: "bold", mb: 2, mt: 4 }} variant="h5">
            Nice to see you again
          </Typography>
          <Typography sx={{ mb: 2 }} variant="h6">
            Login
          </Typography>
          <GoogleButton onClick={handleLogin} />
          <Stack direction="row" alignItems="center">
            <Switch checked={isRemember} onChange={() => setIsRemember(!isRemember)} />
            <Typography>Remember me</Typography>
          </Stack>
        </Stack>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
