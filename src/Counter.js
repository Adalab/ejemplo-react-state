import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: props.val};
    }

    handleDecrementClick(e) {
      this.setState({count: this.state.count - 1});
    }

    handleIncrementClick(e) {
      this.setState({count: this.state.count + 1});
    }

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

Counter.defaultProps = {
  val: 0
};

Counter.propTypes = {
  val: PropTypes.number
};

export default Counter;
