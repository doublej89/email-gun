import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";

class SurveyForm extends Component {
  renderFields() {
    return (
      <div className="mt-4">
        <Field
          label="Survey Title"
          type="text"
          name="title"
          component={SurveyField}
        />
        <Field
          label="Subject Line"
          type="text"
          name="subject"
          component={SurveyField}
        />
        <Field
          label="Email Body"
          type="text"
          name="body"
          component={SurveyField}
        />
        <Field
          label="Recipient List"
          type="text"
          name="recipients"
          component={SurveyField}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="btn btn-danger mr-4">
            Cancel
          </Link>
          <button type="submit" className="btn btn-info">
            <i className="fa fa-check fa-1x" />
            Next
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const error = {};

  if (!values.title) {
    error.title = "Title field cannot be left empty!";
  }
  if (!values.subject) {
    error.subject = "Subject field cannot be left empty!";
  }
  if (!values.body) {
    error.body = "Body field cannot be left empty!";
  }
  error.recipients = validateEmails(values.recipients || "");

  return error;
}

export default reduxForm({
  validate: validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
