import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import NavBar from "./components/navbar/navbar.component";
import Home from "./pages/home/home.page";
import Auth from "./pages/auth/auth.page";

function App() {
  return (
    <Container maxWidth="lg">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Container>
  );
}

export default App;
