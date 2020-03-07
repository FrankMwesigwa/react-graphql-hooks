/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './progress.scss';

const index = () => {
  return (
    <>
      <div className="stepper-bar">
        <ul>
          <li>
            <i className="fas fa-check" alt="" />
            <p>1</p>
            <p>Account information</p>
          </li>
          <li>
            <i className="fas fa-users" />
            <p>2</p>
            <p>Profile information</p>
          </li>
          <li>
            <i className="fas fa-shopping-cart" />
            <p>3</p>
            <p>Address information</p>
          </li>
          <li>
            <i className="fas fa-money-bill-wave" />
            <p>4</p>
            <p>Billing information</p>
          </li>
        </ul>
      </div>

      <div className="stepper-section">
        <div className="stepper-horizontal">
          <div className="stepper-wrapper">
            <i className="fas fa-check stepper-active" alt="" />
            <div className="">1</div>
            <div className="">Acount Information</div>
            <div className="stepper-line stepper-line-active" />
          </div>
          <div className="stepper-wrapper">
            <i className="fas fa-shopping-cart" alt="" />
            <div className="">2</div>
            <div className="step-description">Address Information</div>
            <div className="stepper-line stepper-line-middle" />
          </div>
          <div className="stepper-wrapper">
            <i className="fas fa-money-bill-wave" alt="" />
            <div className="">3</div>
            <div className="step-description">Review Information</div>
            <div className="stepper-line stepper-line-3" />
          </div>
          <div className="stepper-wrapper">
            <i className="fas fa-money-bill-wave" alt="" />
            <div className="">4</div>
            <div className="step-description">Review Information</div>
            <div className="stepper-line stepper-line-end" />
          </div>
        </div>
      </div>

    </>
  );
};

export default index;
