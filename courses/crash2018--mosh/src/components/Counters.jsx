import React, { Component } from "react";
import Counter from "./Counter";

export default class Counters extends Component {
  render() {
    const { counters, onDelete, onIncrement, onReset } = this.props;

    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>

        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}
