import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
// Components
import { Stack, Box, Typography, Switch } from "@mui/material";
import GoogleButton from "../../components/GoogleButton";
import { LoginContainer, LoginImage, LoginCard } from "../../components/styled/login";
// Assets
import BackgroundLogin from "../../assets/backgroundlogin.png";
import Logo from "../../assets/logo.png";

const Login = () => {
  const [isRemember, setIsRemember] = useState(false);
  const navigate = useNavigate();

  const responseGoogle = (res) => {
    if (res && res.profileObj) {
      localStorage.setItem("profile", JSON.stringify(res?.profileObj));
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
          <Typography sx={{ fontWeight: "bold", mb: 2, mt: 4 }} variant="h5">
            Nice to see you again
          </Typography>
          <Typography sx={{ mb: 2 }} variant="h6">
            Login
          </Typography>
          <GoogleLogin
            clientId="577573032500-vo10mnm4r76jb0b5fh5h2ei342nnpp7h.apps.googleusercontent.com"
            render={(renderProps) => <GoogleButton onClick={renderProps.onClick} />}
            onSuccess={responseGoogle}
            onFailure={failureGoogle}
            cookiePolicy={"single_host_origin"}
          />
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
