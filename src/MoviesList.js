import React from 'react';
import PropTypes from 'prop-types';

import Movie from './Movie.js';

class MoviesList extends React.Component {
  render() {
    const {data, text} = this.props;

    return (
      <ul>
        {data
          .filter(movie =>
            movie.title.toLowerCase().includes(text.toLowerCase()))
          .map((movie, index) =>
            <Movie key={index} {...movie} />
        )}
      </ul>
    )
  }
}

MoviesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  text: PropTypes.string.isRequired
}

export default MoviesList;
