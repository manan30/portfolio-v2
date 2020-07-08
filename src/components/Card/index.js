import PropTypes from 'prop-types';
import React from 'react';
import { CardContainer } from './styled';

function Card({ children, animation, ...styles }) {
  return (
    <CardContainer animation={animation} {...styles}>
      {children}
    </CardContainer>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  animation: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.string
  ])
};

Card.defaultProps = {
  animation: ''
};

export default Card;
