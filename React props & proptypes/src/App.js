import React from 'react';
import PropTypes from 'prop-types';

const Title = () => {
  return <h1>GM Tuts .. !!</h1>
}

const Greetings = (props) => {
  const {name, age} = props;
  return <p>Welcome to the world of react, {name} age ({age}) </p>
}

export const App = () => {
    return (
      <div className="Test">
        <Title />
        <Greetings/>
      </div>
    )
  }

Greetings.defaultProps = {
  name: 'Gaurang',
  age: 100
};

Greetings.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number,
}
