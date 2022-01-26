import { Navbar as NavbarStyled } from "../styled/navbar";
import { Container } from "../styled/shared";
import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import InputSearch from "../InputSearch";
import User from "../User";
import Logo from "../../assets/logo.png";

const Navbar = () => {
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
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Home
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/series"
            >
              Series
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/movies"
            >
              Movies
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/popular"
            >
              Popular
            </Link>
          </Stack>
          <Stack height="100%" direction="row" gap={2}>
            <InputSearch />
            <User />
          </Stack>
        </Stack>
      </Container>
    </NavbarStyled>
  );
};

export default Navbar;
