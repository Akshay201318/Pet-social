import React, { useEffect } from "react";
import "../App.css";
import Container from "./Container";
import { Route, Switch } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Singlepost from "./Single-post";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Container} />
        <Route exact path="/single/:id" component={Singlepost} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
