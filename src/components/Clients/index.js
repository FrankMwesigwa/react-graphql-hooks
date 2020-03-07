import React, { Component } from 'react';
import Account from './Account';
import Address from './Address';
import Review from './Review';
import '../stepper/Stepper.scss';

class Clients extends Component {
  state = {
    step: 1,
    userName: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    jobCompany: '',
    jobLocation: ''
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  showStep = () => {
    const { step, firstName, lastName, userName, jobTitle, jobCompany, jobLocation } = this.state;
    if (step === 1) {
      return (
        <Account
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          firstName={firstName}
          lastName={lastName}
          userName={userName}
          step={step}
        />
      );
    }
    if (step === 2) {
      return (
        <Address
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          jobTitle={jobTitle}
          jobCompany={jobCompany}
          jobLocation={jobLocation}
          step={step}
        />
      );
    }
    if (step === 3) {
      return (
        <Review
          prevStep={this.prevStep}
          firstName={firstName}
          lastName={lastName}
          userName={userName}
          jobTitle={jobTitle}
          jobCompany={jobCompany}
          jobLocation={jobLocation}
          step={step}
        />
      );
    }
  };

  render() {
    const { step } = this.state;
    return (
      <div className="container">
        <div className="m-5">
          {' '}
          <h3>Step {step} of 3. </h3>
        </div>
        {this.showStep()}
      </div>
    );
  }
}

export default Clients;
