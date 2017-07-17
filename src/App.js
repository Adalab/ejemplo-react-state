import React, { Component } from 'react';

/*
  Aqui solo importamos el componente Counter y lo utilizamos en el método render
  de App.
*/

import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
