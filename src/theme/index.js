import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#141414",
        },
      },
    },
  },
  palette: {
    // Blue blockbuster
    primary: {
      main: "#0e3fa9",
    },
    tertiary: {
      main: "#141414",
    },
    text: {
      white: "#ffffff",
      black: "#000000",
      grey: "#656565",
    },
    filters: {
      dark: "rgba(0, 0, 0, .5)",
    },
  },
  typography: {},
});

export default theme;
