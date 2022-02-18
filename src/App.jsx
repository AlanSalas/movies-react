import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Layout from "./layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                {/*Protected Routes*/}
                <Route element={<ProtectedRoute />}>
                  <Route path="/" element={<Home />} />
                </Route>
                <Route path="login" element={<Login />} />
              </Route>
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};

export default App;
