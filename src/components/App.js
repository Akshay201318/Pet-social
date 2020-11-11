import React, { useEffect } from "react";
import "../App.css";
import Container from "./Container";
import { Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <div>
      <Route exact path="/" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Container} />
    </div>
  );
}

export default App;
