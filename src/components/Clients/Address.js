import React, { Component } from 'react';
import '../stepper/Stepper.scss';

class Address extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { handleChange, jobTitle, jobCompany, jobLocation } = this.props;
    return (
      <div className="container w-70 justify-content-center">
        <div className="stepper-section">
          <div className="stepper-horizontal">
            <div className="stepper-wrapper">
              <i className="fas fa-check stepper-active" alt="" />
              <div className="">1</div>
              <div className="">Acount Information</div>
              <div className="stepper-line stepper-line-active" />
            </div>
            <div className="stepper-wrapper">
              <i className="fas fa-shopping-cart stepper-active" alt="" />
              <div className="">2</div>
              <div className="step-description">Address Information</div>
              <div className="stepper-line" />
            </div>
            <div className="stepper-wrapper">
              <i className="fas fa-money-bill-wave" alt="" />
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
        <h3>Enter your Address Information Here !!!</h3>

        <div>
          <label>Job Title</label>
          <br />
          <input type="text" name="jobTitle" value={jobTitle} onChange={handleChange('jobTitle')} />
        </div>

        <div>
          <label>Job Company</label>
          <br />
          <input
            type="text"
            name="jobCompany"
            value={jobCompany}
            onChange={handleChange('jobCompany')}
          />
        </div>

        <div>
          <label>Job Location</label> <br />
          <input
            type="text"
            name="jobLocation"
            value={jobLocation}
            onChange={handleChange('jobLocation')}
          />
        </div>

        <div>
          <div className="m-3">
            <button className="btn btn-outline-warning" onClick={this.back}>
              Previous
            </button>
          </div>
          <div className="m-3">
            <button className="btn btn-outline-primary" onClick={this.continue}>
              Save and continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Address;
