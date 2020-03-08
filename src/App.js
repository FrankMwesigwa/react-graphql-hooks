import React, { Component } from 'react';
import './App.scss';
import ProgressBar from './components/progressbar';
import Clients from './components/Clients';
import BasicDropdown from './components/dropdown/basic';
import FilterData from './components/dropdown/Filter';
import Persons from './components/dropdown/persons';

class App extends Component {
  render() {
    return (
      <>
        <div className="">
          {/* <ProgressBar /> */}
          {/* <Clients /> */}
          {/* <BasicDropdown /> */}
          <FilterData />
          <Persons />
        </div>
      </>
    );
  }
}

export default App;
