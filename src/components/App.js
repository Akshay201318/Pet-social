import React, { useEffect } from "react";
import "../App.css";
import Container from "./Container";
import { Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Route exact path="/" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Container} />
      <Footer />
    </div>
  );
};

export default App;
