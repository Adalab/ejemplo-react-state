import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
    constructor(props) {
      /*
        En las clases de ES6, si usamos this dentro del constructor, es
        obligatorio llamar a la funcion super() antes. De ahí que la hayamos
        añadido aquí
      */
      super(props);

      /*
       Aqui definimos el primer valor de nuestro state. En este caso estamos
       asignando ese valor a una propiedad. De esta forma, si queremos cambiar el
       estado inicial, podremos hacerlo pasando una propiedad val a la hora de
       utilizar el componente (Ej: val={3}).
      */
      this.state = { count: props.val};
    }

    handleDecrementClick(e) {
      /*
        Con this.setState(nuevoStado) actualizamos el estado del componente.

        El setState lo que hace exactamente es actualizar el estado actual con
        la nueva información que le pasamos. Ejemplo:

        Estado antes de this.setState
        {
          total: 3,
          image: "/images/default.png"
        }

        this.setState({total: this.state.total + 1})

        Estado después del this.setState
        {
          total: 4,
          image: "/images/default.png"
        }
      */
      this.setState({count: this.state.count - 1});
    }

    handleIncrementClick(e) {
      this.setState({count: this.state.count + 1});
    }

    /*
      El bind de las funciones que pasamos a onClick es para especificar que
      dentro de esa función, el this hará referencia a la instancia actual, es decir,
      cuando creemos un componente botón, el this será ese componente y de esa forma
      al utilizar this.setState dentro de handleDecrementClick, estaremos
      modificando el estado de ese componente en concreto.

      Para obtener el valor del estado del componente, simplmente usamos
      this.state
    */
    render() {
        return (
            <div>
                <button onClick={this.handleDecrementClick.bind(this)}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.handleIncrementClick.bind(this)}>+</button>
            </div>
        )
    }
}

// Definimos la propiedad por defecto para que tenga un valor el contador

Counter.defaultProps = {
  val: 0
};

// El valor del la propiedad val debe ser un número para que funcione correctamente
Counter.propTypes = {
  val: PropTypes.number.isRequired
};

export default Counter;
