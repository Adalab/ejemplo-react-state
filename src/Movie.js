import React from 'react';
import PropTypes from 'prop-types';

import defaultCover from './images/cover-default.png'

class Movie extends React.Component {
  render() {
    const {
      cover_url,
      title,
      author,
      rating,
      description
    } = this.props

    return (
      <li>
        <img src={cover_url} alt={`Portada de ${title}`} />
        <h2>{title}</h2>
        <ul>
          <li>Autor: {author}</li>
          <li>Puntuación: {rating}</li>
          <li>Descripción: {description || 'No hay descripción'}</li>
        </ul>
      </li>
    );
  }
}

Movie.defaultProps = {
  cover_url: defaultCover,
  author: 'No hay autor',
  rating: 'No hay puntuación',
  description: 'No hay descripción'
}

Movie.propTypes = {
  cover_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string.isRequired
}

export default Movie;
