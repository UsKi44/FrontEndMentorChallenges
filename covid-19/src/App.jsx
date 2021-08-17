import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <Router className="App">
      <Header />
      <Route exact path="/">
        <Search />
      </Route>
    </Router>
  );
}

export default App;
