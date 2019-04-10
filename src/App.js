import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./counter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
