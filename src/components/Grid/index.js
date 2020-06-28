import styled from 'styled-components';
import React from 'react';

const GridContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

function Grid({ children }) {
  return (
    <>
      <GridContainer>{children}</GridContainer>
      <div style={{ paddingBottom: '1.5rem' }} />
    </>
  );
}

export default Grid;
