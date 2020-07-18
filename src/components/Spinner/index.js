import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTheme } from '../../providers/ThemeProvider';

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

const ScaleAnimation = keyframes`
  from {
    transform: scale(1)
  }

  to {
    transform: scale(1.5)
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;

  ::after {
    content: 'This is taking longer than usual. Please hang tight';
    margin-top: 2rem;
    color: inherit;
    font-size: 1.5rem;
    letter-spacing: 1px;
    text-align: center;
    animation: ${keyframeF} 0.8s ease-in-out infinite alternate;
    animation-delay: 0.8s;
  }
`;

const SpinnerDots = styled.div`
  height: 1rem;
  width: 1rem;
  margin-right: 1rem;
  background-color: ${(props) =>
    props.toggled
      ? `var(--color-secondary-${props.themePreference})`
      : `var(--initial-color-secondary)`};
  border-radius: 50%;
  animation: ${ScaleAnimation} 0.7s ease-in-out infinite alternate;
  animation-delay: ${(props) => props.delay && props.delay}s;

  ::last-child {
    margin-right: 0;
  }
`;

function Spinner() {
  const { themeState, toggled } = useTheme();
  return (
    <SpinnerContainer>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <SpinnerDots
          delay="0"
          toggled={toggled}
          themePreference={themeState.themePreference}
        />
        <SpinnerDots
          delay="0.2"
          toggled={toggled}
          themePreference={themeState.themePreference}
        />
        <SpinnerDots
          delay="0.4"
          toggled={toggled}
          themePreference={themeState.themePreference}
        />
        <SpinnerDots
          delay="0.6"
          toggled={toggled}
          themePreference={themeState.themePreference}
        />
      </div>
    </SpinnerContainer>
  );
}

export default Spinner;
