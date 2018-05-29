import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.map(survey => {
      return (
        <div className="card bg-light mt-3" key={survey._id}>
          <div className="card-header">
            <h5 className="card-title">{survey.title}</h5>
          </div>
          <div className="card-body">
            <p className="card-text">{survey.body}</p>
            <p className="right">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="d-flex justify-content-start p-3">
            <a href="" className="btn btn-info mr-3">
              Yes: {survey.yes}
            </a>
            <a href="" className="btn btn-info">
              No: {survey.no}
            </a>
          </div>
        </div>
      );
    });
  }

  render() {
    if (this.props.surveys.length > 0) {
      return <div>{this.renderSurveys()}</div>;
    }
    return (
      <div style={{ textAlign: "center", paddingTop: "50px" }}>
        <h2>You haven't created any surveys</h2>
        <h2>Press the red floating button to get started</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
