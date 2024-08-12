import './App.css';
import React from "react";

import Navbar from './components/Navbar';
import Footer from './components/Footer'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import NoPage from './pages/NoPage';

export default function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path = "/" element={<Layout />}></Route>
          <Route index element={ <Home />}></Route>
          <Route path="/about" element={ <About /> }></Route>
          <Route path="/product" element={ <Product />}></Route>
          <Route path="/pricing" element={ <NoPage />}></Route>
          <Route path="*" element={ <NoPage /> }></Route>
        </Routes>
      <Footer />
    </Router>
  );

  // Tailwind Integration Hello World test
  //build React app
  //move build to backend in apr. directories
  //view that serves index.html
  //link the view to a url ; most likely root, catch all
  //figure out how to deploy the backend
}