import React, { Component } from 'react';

/*
  Creamos un archivo externo con la info de las pelis para no llenar de App.js
  de lineas de código y así tener cada cosa en su sitio y un código más limpio
*/
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

        {
          /*
            Siempre que ponemos comentarios en JSX debemos usar llaves {} alrededor
            de ellos.

            En este input lo que estamos haciendo es que cuando cambie el texto
            se actualice el estado con el texto que tiene y a su vez, su valor
            sea igual a ese texto del estado.

            Esto es una práctica común en React y es la forma correcta de hacerlo

            Con onChange={this.handleChange.bind(this)} lo que estamos diciendo
            es que al haber cualquier cambio en el input, se ejecute el método
            handleChange. Este método lo único que hace es actualizar el estado.
          */
        }

        <input
          type="text"
          onChange={this.handleChange.bind(this)}
          placeholder="Busca una película..."
          value={this.state.text} />

        {
          /*
            El método filter es un método de los arrays que nos permite filtrar
            valores. A este método se le pasa una función que debe devolver un booleano.
            El método filter devuelve un array que contiene los elementos cuya función ha
            devuelto un booleano.

            En este caso en filter devolvemos verdadero si el título de la película
            contiene el texto que hemos escrito en el input. Así se filtrarán sólo
            las peliculas que queremos encontrar.

            Después de hacer el filter podemos hacer el map para mostrar los componentes
          */
        }

        {movies
          .filter(movie =>
            // El método .includes() sirve para saber si un string contiene a otro
            movie.title.toLowerCase().includes(this.state.text.toLowerCase()))
          .map((movie, index) =>
            /*
              Para que React pueda identificar cada elemento dentro de una lista dinámica,
              debemos pasar la propiedad key a cada elemento de la lista. Esa propiedad
              key debe tener un valor único, para conseguir el valor único usaremos el indice
              del elemento actual.
            */
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
