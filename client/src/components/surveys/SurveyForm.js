import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

class SurveyForm extends Component {
    renderFields() {
        return (
            <div>
                <Field label="Survey Title" type="text" name="title" component={SurveyField}/>
                <Field label="Subject Line" type="text" name="subject" component={SurveyField}/>
                <Field label="Email Body" type="text" name="body" component={SurveyField}/>
                <Field label="Recipient List" type="text" name="emails" component={SurveyField}/>
            </div>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
                    <button type="submit" className="teal btn-flat right white-text">Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>             
            </div>
        );
    }
}

function validate(values) {
    const error = {};

    if (!values.title) {
        error.title = 'Title field cannot be left empty!'; 
    }
    if (!values.subject) {
        error.subject = 'Subject field cannot be left empty!'
    }
    if (!values.body) {
        error.body = 'Body field cannot be left empty!'
    }
    error.emails = validateEmails(values.emails || '');

    return error;
}

export default reduxForm({
    validate: validate,
    form: 'surveyForm'
})(SurveyForm);