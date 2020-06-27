import styled from 'styled-components';
import React from 'react';

const GridContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

function Grid({ children }) {
  return <GridContainer>{children}</GridContainer>;
}

export default Grid;
