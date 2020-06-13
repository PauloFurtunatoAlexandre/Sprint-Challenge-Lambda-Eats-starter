import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import MainNavbar from "./MainNavbar/MainNavbar.component";
import Home from "./Home/Home.component";
import Pizza from "./Pizza/Pizza.component";

export default function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pizza">
        <Pizza />
      </Route>
    </div>
  );
}
