import React from 'react';
import styled from 'styled-components';

const PageText = styled.div`
  height: ${(props) => props.height && props.height};
  margin-top: ${(props) => props.marginTop && props.marginTop};
  margin-left: ${(props) => props.marginLeft && props.marginLeft};

  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight && props.fontWeight};

  overflow: hidden;
`;

function Text({ children, ...styles }) {
  return <PageText {...styles}>{children}</PageText>;
}

export default Text;
