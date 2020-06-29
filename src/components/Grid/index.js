import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const GridContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr 1fr;
  width: 100%;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

function Grid({ children }) {
  return (
    <div style={{ width: '100%' }}>
      <GridContainer>{children}</GridContainer>
      <div style={{ paddingBottom: '1.5rem' }} />
    </div>
  );
}

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Grid;
