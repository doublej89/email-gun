import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>
        <div>
          <label>Survey Title</label>
          <div>{formValues.title}</div>
        </div>
        <div>
          <label>Subject Line</label>
          <div>{formValues.subject}</div>
        </div>
        <div>
          <label>Email Body</label>
          <div>{formValues.body}</div>
        </div>
        <div>
          <label>Recipient List</label>
          <div>{formValues.recipients}</div>
        </div>
      </div>
      <button
        className="btn btn-warning"
        style={{ color: "white" }}
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="btn btn-success"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey<i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
