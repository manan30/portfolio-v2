import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
  padding: 1rem;

  border-radius: 0.5rem;
  background-color: #fafffd;
  box-shadow: 0 0 0.6rem #dce1de;

  ${(props) => props.animation && props.animation};
  /* transition: transform 0.3s ease-in-out;

  :hover {
    transform: scaleX(1.1);
  } */
`;

function Card({ children, animation }) {
  return <CardContainer animation={animation}>{children}</CardContainer>;
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  animation: PropTypes.string
};

Card.defaultProps = {
  animation: ''
};

export default Card;
