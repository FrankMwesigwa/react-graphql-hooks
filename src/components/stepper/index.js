import React, { Component } from 'react'
import './App.scss';
import Stepper from './components/stepper/Stepper'
import Accounts from './components/stepper/createAccount';
import Payments from './components/stepper/Payments';

class StepForm extends Component {

  state = {
    currentStep: 1
  }

  handleClick = (clickType) => {
    const { currentStep } = this.state;
    let newStep = currentStep;
    clickType === "next" ? newStep++ : newStep--

    if( newStep > 0 && newStep <= 4) {
      this.setState({ currentStep: newStep});
    }
    
  }

  render() {

    const stepsArray = [
      <Accounts />,
      <Payments />,
      'Add perosnal data',
      'Add payment',
      'Submit application'
    ];

    return (
      <>
      <div className="stepper-container-horizontal">
        <Stepper steps={ stepsArray } direction="horizontal" currentStepNumber={this.state.currentStep} />
      </div>

      <div className="buttons-container">
        <button onClick={() => this.handleClick()}>previous</button>
        <button onClick={() => this.handleClick("next")}>next</button>
      </div>

      </>
    )
  }
}

export default StepForm;

