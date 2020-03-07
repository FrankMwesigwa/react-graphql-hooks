import React, { Component } from 'react';
import './App.scss';
import ProgressBar from './components/progressbar';
import Clients from './components/Clients';

class App extends Component {
  render() {
    return (
      <>
        <div className="">
          {/* <ProgressBar /> */}
          <Clients />
        </div>
      </>
    );
  }
}

export default App;
