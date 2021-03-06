import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const GridContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr 1fr;
  width: 100%;

  @media screen and (max-width: 815px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const MasonaryGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Grid({ children, type }) {
  return type === 'masonary' ? (
    <MasonaryGridContainer>{children}</MasonaryGridContainer>
  ) : (
    <div style={{ width: '100%' }}>
      <GridContainer>{children}</GridContainer>
      <div style={{ paddingBottom: '1.5rem' }} />
    </div>
  );
}

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  type: PropTypes.string
};

Grid.defaultProps = {
  type: ''
};

export default Grid;
