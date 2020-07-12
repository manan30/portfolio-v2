import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import MoonIcon from '../../../data/svg/moon.svg';
import SunIcon from '../../../data/svg/sun.svg';
import { useTheme } from '../../providers/ThemeProvider';

const ToggleSwitchContainer = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  height: 1rem;
  width: 3.5rem;
  padding: 2px;

  background-color: #fafffd;
  border: 0.5px solid #25282f;
  border-radius: 5rem;

  svg {
    ${(props) =>
      props.type && props.type === 'dark'
        ? css`
            height: 0.8rem;
            width: 0.8rem;
            margin-left: 0.4rem;
            margin-right: auto;
            fill: #dd6e42;
            stroke: #dd6e42;
          `
        : css`
            height: 0.75rem;
            width: 0.75rem;
            margin-left: auto;
            margin-right: 0.4rem;
            fill: #003844;
            stroke: #003844;
          `}
  }

  @media screen and (max-width: 815px) {
    height: 0.8rem;
    width: 3rem;
  }
`;

const ToggleSwitchButton = styled.button`
  position: absolute;

  height: 1.7rem;
  width: 1.7rem;
  margin-left: -0.4rem;
  padding: 0;

  border: 0.5px solid
    ${(props) =>
      props.toggled
        ? `var(--toggle-border-color-${props.themePreference})`
        : `var(--initial-toggle-border-color)`};
  background-color: ${(props) =>
    props.toggled
      ? `var(--background-color-${props.themePreference})`
      : `var(--initial-background-color)`};
  border-radius: 50%;
  transform: translateX(
    ${(props) =>
      props.toggled
        ? `var(--toggle-switch-transform-${props.themePreference})`
        : `var(--initial-toggle-switch-transform)`}
  );

  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 815px) {
    height: 1.7rem;
    width: 1.7rem;

    transform: translateX(
      ${(props) =>
        props.toggled
          ? `var(--toggle-switch-transform-${props.themePreference})`
          : `var(--initial-toggle-switch-transform)`}
    );
  }
`;

function ToggleSwitch() {
  const { themeState, themeDispatch } = useTheme();
  const [colorMode, setColorMode] = useState();

  useEffect(() => {
    if (!themeState.toggled) {
      const mode = document.documentElement.style.getPropertyValue(
        '--color-mode'
      );
      setColorMode(mode);
    } else {
      setColorMode(themeState.themePreference);
    }
  }, [themeState]);

  const clickHandler = () => {
    if (themeState.themePreference && themeState.themePreference === 'light')
      themeDispatch({ type: 'toggle-dark-theme' });
    else if (
      themeState.themePreference &&
      themeState.themePreference === 'dark'
    )
      themeDispatch({ type: 'toggle-light-theme' });
    else if (colorMode === 'dark')
      themeDispatch({ type: 'toggle-light-theme' });
    else themeDispatch({ type: 'toggle-dark-theme' });
  };

  return (
    <ToggleSwitchContainer type={colorMode}>
      {colorMode === 'dark' && <SunIcon />}
      <ToggleSwitchButton
        onClick={clickHandler}
        themePreference={themeState.themePreference}
        toggled={themeState.toggled}
      />
      {colorMode !== 'dark' && <MoonIcon />}
    </ToggleSwitchContainer>
  );
}

export default ToggleSwitch;
