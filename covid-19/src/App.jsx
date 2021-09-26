import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import Countries from "./components/Countries";

function App() {
  return (
    <Router className="App">
      <Header />
      <Search />
      <Countries />
    </Router>
  );
}

export default App;
