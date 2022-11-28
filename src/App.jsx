import { useState } from "react";
import { Navbar } from "react-bootstrap";
import { HashRouter, Route, Routes } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductsDetail from "./pages/ProductsDetail";
import Purchases from "./pages/Purchases";
import "./App.css";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <HashRouter>
      {isLoading && <LoadingScreen />}
      <NavBar />
      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductsDetail />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
