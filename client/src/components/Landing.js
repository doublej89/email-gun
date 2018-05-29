import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    let surveyBtn = this.props.auth ? (
      <Link
        to="/surveys"
        className="btn mt-4"
        style={{
          color: "white",
          fontSize: "1.4em",
          textShadow: "none",
          background: "#ee6e73"
        }}
      >
        Show my Surveys
      </Link>
    ) : null;

    return (
      <div
        className="landing"
        style={{ textAlign: "center", position: "absolute", width: "100%" }}
      >
        <h1 className="mt-4">Survey Gun</h1>
        <p>You need to know what your users want from you</p>
        <p>So it's important to survey them quickly and easily</p>
        {surveyBtn}
      </div>
    );
  }
}

let mapStateToProps = function(state) {
  return { auth: state.auth };
};

export default connect(mapStateToProps, null)(Landing);
