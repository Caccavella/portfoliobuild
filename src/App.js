import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Main from './components/main/main';
import './reset.css';
import './App.css';
//eslint-disable-next-line
<link href="https://fonts.googleapis.com/css?family=Crimson+Text" rel="stylesheet"/>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Main} />
      </div>
    );
  }
}

export default App;
