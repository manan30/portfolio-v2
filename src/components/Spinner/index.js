import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const keyframeA = keyframes`
  33.33%, 66.67% {
    padding: 1em;
  }
`;

const keyframeB = keyframes`
  33.33% {
    transform: rotate(0deg);
  }
  66.67%, 100% {
    transform: rotate(90deg);
  }
`;

const keyframeF = keyframes`
  to {
    opacity: 0;
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;

  ::after {
    content: 'This is taking longer than usual. Please hang tight';
    color: inherit;
    font-size: 1.5rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    animation: ${keyframeF} 1s ease-in-out infinite alternate;
  }
`;

function Spinner() {
  return <SpinnerContainer />;
}

export default Spinner;
