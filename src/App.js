import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Garage Door</h2>
            <Button variant="primary">Opens </Button>
        </header>
      </div>
    );
  }
}

export default App;
