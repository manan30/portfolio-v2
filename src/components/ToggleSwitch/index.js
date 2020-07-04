import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import MoonIcon from '../../images/svg/moon.svg';
import SunIcon from '../../images/svg/sun.svg';

const ToggleSwitchContainer = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  height: 1rem;
  width: 3.5rem;
  padding: 2px;

  /* background: ${(props) => props.background && props.background}; */
  background-color: #fafffd;
  border: 0.5px solid #313e50;
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
`;

const ToggleSwitchButton = styled.button`
  position: absolute;

  height: 1.7rem;
  width: 1.7rem;
  margin-left: -0.4rem;
  padding: 0;

  /* border: 1px solid #dce1de; */
  border: 0.5px solid
    ${(props) => (props.switch === 'dark' ? '#dce1de' : '#313e50')};
  background-color: ${(props) => props.background && props.background};
  border-radius: 50%;
  transform: translateX(${(props) => (props.switch === 'dark' ? '2rem' : '0')});

  transition: all 0.5s ease-in-out;
`;

function ToggleSwitch({ onClickHandler, themePreference }) {
  return (
    <ToggleSwitchContainer
      background={themePreference === 'dark' ? '#fafffd' : '#313e50'}
      type={themePreference}
    >
      {themePreference === 'dark' && <SunIcon />}
      <ToggleSwitchButton
        onClick={onClickHandler}
        background={themePreference === 'dark' ? '#313e50' : '#fafffd'}
        switch={themePreference}
        type="button"
      />
      {themePreference !== 'dark' && <MoonIcon />}
    </ToggleSwitchContainer>
  );
}

ToggleSwitch.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  themePreference: PropTypes.string
};

ToggleSwitch.defaultProps = {
  themePreference: ''
};

export default ToggleSwitch;
