import React, { Component } from 'react';

import movies from './movies';
import netflixLogo from './images/netflix.png';

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
        <h1>
          ¿Qué puedo ver en
          <img className="netflix-logo" src={netflixLogo} alt="Netflix"/>
          ?
        </h1>

        <input
          type="text"
          onChange={this.handleChange.bind(this)}
          placeholder="Busca una película..." />

        {movies
          .filter(movie =>
            movie.title.toLowerCase().includes(this.state.text.toLowerCase()))
          .map((movie, index) =>
            <div key={index} >
              <img src={movie.cover_url} alt={`Portada de ${movie.title}`} />
              <h2>{movie.title}</h2>
              <ul>
                <li>Autor: {movie.author}</li>
                <li>Puntuación: {movie.rating}</li>
                <li>Descripción: {movie.description || 'No hay descripción'}</li>
              </ul>
            </div>
        )}
      </div>
    );
  }
}

export default App;
