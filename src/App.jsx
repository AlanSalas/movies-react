import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import AuthProvider from "./context/AuthContext";
import Layout from "./layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <AuthProvider>
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
      </AuthProvider>
    </>
  );
};

export default App;
