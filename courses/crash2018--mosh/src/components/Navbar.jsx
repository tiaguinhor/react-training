import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbrand">
          Nabvar{" "}
          <span className="badge badge-pill badge-primary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}
