import React, { Component } from 'react';

import movies from './movies';
import netflixLogo from './images/netflix.png';

import SearchField from './SearchField';
import MoviesList from './MoviesList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1>¿Qué puedo ver en <img style={{verticalAlign: 'middle'}} width={124} src={netflixLogo} alt="Netflix"/>?</h1>

        <SearchField onChange={this.handleChange.bind(this)} />
        <MoviesList data={movies} text={this.state.text} />
      </div>
    );
  }
}

export default App;
