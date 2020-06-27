import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  padding: 1rem;

  border-radius: 0.5rem;
  background-color: #fafffd;
  box-shadow: 0 0 0.6rem #dce1de;

  /* transition: transform 0.3s ease-in-out;

  :hover {
    transform: scaleX(1.1);
  } */
`;

function Card({ children }) {
  return <CardContainer>{children}</CardContainer>;
}

export default Card;
