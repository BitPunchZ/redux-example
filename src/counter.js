import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  state = { count: 0 };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button>-</button>
          <span>{this.state.count}</span>
          <button>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;
