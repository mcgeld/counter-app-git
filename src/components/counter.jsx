import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <>
        <span className="badge badge-primary">{this.formatCount()}</span>
        <button>Increment</button>
      </>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
