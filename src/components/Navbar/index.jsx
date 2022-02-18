// Components
import { Stack, Box, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import InputSearch from "../InputSearch";
import User from "../User";
import Logo from "../../assets/logo.png";
// StyledComponents
import { Navbar as NavbarStyled } from "../styled/navbar";
import { Container, LinkStyled } from "../styled/shared";
// Hooks
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { logOut } = useAuth();

  return (
    <NavbarStyled>
      <Container>
        <Stack
          width="100%"
          height="100%"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" height="100%" gap={2} alignItems="center">
            <Box sx={{ width: "100px" }} component="img" src={Logo} />
            <LinkStyled to="/">Home</LinkStyled>
            <LinkStyled to="/series">Series</LinkStyled>
            <LinkStyled to="/movies">Movies</LinkStyled>
            <LinkStyled to="/popular">Popular</LinkStyled>
          </Stack>
          <Stack height="100%" direction="row" gap={2}>
            <InputSearch />
            <User />
            <IconButton onClick={logOut} sx={{ color: "text.white" }}>
              <LogoutIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </NavbarStyled>
  );
};

export default Navbar;
