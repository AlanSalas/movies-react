// React
import { useState } from "react";
// Hooks
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// Components
import { Stack, Box, Typography } from "@mui/material";
import GoogleLogin from "react-google-login";
// StyledComponents
import GoogleButton from "../../components/GoogleButton";
import { LoginContainer, LoginImage, LoginCard } from "../../components/styled/login";
// Assets
import BackgroundLogin from "../../assets/backgroundlogin.png";
import Logo from "../../assets/logo.png";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const responseGoogle = (res) => {
    if (res && res.profileObj) {
      login(res);
      navigate("/");
    }
  };

  const failureGoogle = (err) => {
    console.log(err, "err");
  };

  return (
    <LoginContainer direction="row">
      <LoginImage>
        <Box sx={{ height: "100%", width: "100%" }} component="img" src={BackgroundLogin} />
      </LoginImage>
      <LoginCard>
        <Stack width="100%" sx={{ textAlign: "left" }}>
          <Box sx={{ width: "150px", margin: "0 auto" }} component="img" src={Logo} />
          <Typography sx={{ color: "text.white", fontWeight: "bold", mb: 2, mt: 4 }} variant="h5">
            Nice to see you again
          </Typography>
          <Typography sx={{ color: "text.white", mb: 2 }} variant="h6">
            Login
          </Typography>
          <GoogleLogin
            clientId="577573032500-vo10mnm4r76jb0b5fh5h2ei342nnpp7h.apps.googleusercontent.com"
            render={(renderProps) => <GoogleButton onClick={renderProps.onClick} />}
            onSuccess={responseGoogle}
            onFailure={failureGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </Stack>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
