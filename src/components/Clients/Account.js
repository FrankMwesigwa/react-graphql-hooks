import React, { Component } from 'react';
import '../stepper/Stepper.scss';

class Account extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { handleChange, firstName, lastName, userName } = this.props;
    return (
      <div className="container w-70 justify-content-center">
        <div className="stepper-section">
          <div className="stepper-horizontal">
            <div className="stepper-wrapper">
              <i className="fas fa-store-alt stepper-active" alt="" />
              <div className="">1</div>
              <div className="">Acount Information</div>
              <div className="stepper-line stepper-line-active" />
            </div>
            <div className="stepper-wrapper">
              <i className="fas fa-shopping-cart" alt="" />
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
        <h3>Enter your Account Information</h3>

        <div>
          <label>First Name</label>
          <br />
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange('firstName')}
          />
        </div>

        <div>
          <label>Last Name</label>
          <br />
          <input type="text" name="lastName" value={lastName} onChange={handleChange('lastName')} />
        </div>

        <div>
          <label>User Name</label> <br />
          <input type="text" name="username" value={userName} onChange={handleChange('userName')} />
        </div>

        <div className="m-3">
          <button type="submit" className="btn btn-outline-primary" onClick={this.continue}>
            Save and continue
          </button>
        </div>
      </div>
    );
  }
}

export default Account;
