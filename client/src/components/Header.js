import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Billing from "./Billing";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="nav-item">
            <a className="nav-link" href="/auth/google">
              Login With Google
            </a>
          </li>
        );
      default:
        return [
          <li className="nav-item" key="2" style={{ margin: "0 10px" }}>
            <Billing />
          </li>,
          <li className="nav-item" key="3" style={{ color: "#32ff12" }}>
            <span className="credits-link">
              Credits: {this.props.auth.credits}
            </span>
          </li>,
          <li className="nav-item" key="1">
            <a className="nav-link" href="/api/logout">
              Logout
            </a>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="navbar-brand"
          >
            Survey Gun
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">{this.renderContent()}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

let mapStateToProps = function(state) {
  return { auth: state.auth };
};

export default connect(mapStateToProps, null)(Header);
