/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import '../stepper/Stepper.scss';

export class Review extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { firstName, lastName, userName, jobTitle, jobCompany, jobLocation } = this.props;
    return (
      <div>
        <div className="stepper-section">
          <div className="stepper-horizontal">
            <div className="stepper-wrapper">
              <i className="fas fa-check stepper-active" alt="" />
              <div className="">1</div>
              <div className="">Acount Information</div>
              <div className="stepper-line stepper-line-active" />
            </div>
            <div className="stepper-wrapper">
              <i className="fas fa-check stepper-active" alt="" />
              <div className="">2</div>
              <div className="step-description">Address Information</div>
              <div className="stepper-line" />
            </div>
            <div className="stepper-wrapper">
              <i className="fas fa-money-bill-wave stepper-active" alt="" />
              <div className="">3</div>
              <div className="step-description">Review Information</div>
              <div className="stepper-line" />
            </div>
            <div className="stepper-wrapper">
              <i className="fas fa-money-bill-wave" alt="" />
              <div className="">4</div>
              <div className="step-description">Review Information</div>
              <div className="stepper-line stepper-line-end" />
            </div>
          </div>
        </div>
        <h2>Here is the information you entered</h2>
        <div>First Name: {firstName}</div>
        <div>Last Name: {lastName}</div>
        <div>User Name: {userName}</div>
        <div>Job Title: {jobTitle}</div>
        <div>Job Company: {jobCompany}</div>
        <div>Job Location: {jobLocation}</div>
        <div className="m-3">
          <button className="btn btn-outline-warning" onClick={this.back}>
            Previous
          </button>
        </div>
      </div>
    );
  }
}

export default Review;
