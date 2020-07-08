import styled, { keyframes } from 'styled-components';

const sidebarTranslateAnimationEnter = keyframes`
  from {
    transform: translateX(150%);
  }

  to {
    transform: translateX(0);
  }
`;

const sidebarTranslateAnimationExit = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(200%);
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  position: fixed;
  top: 0;

  height: 2rem;
  width: calc(100% - 2rem);
  padding: 1rem;

  background-color: ${(props) =>
    props.theme === 'dark' ? '#25282f' : '#ffffff'};

  box-shadow: ${(props) =>
    props.shadow
      ? `0 0 0.6rem ${props.theme === 'dark' ? '#0d1321' : '#dce1de'}`
      : 'none'};
  transition: all 0.4s ease-in-out;
`;

const HeaderText = styled.span`
  margin-left: 2rem;

  color: ${(props) => (props.theme === 'dark' ? '#f8f7ff' : '#404e7c')};
  font-size: 1.6rem;
  font-weight: bolder;
  font-family: Nunito;
  transition: all 0.4s ease-in-out;

  @media screen and (max-width: 815px) {
    margin-left: 0.5rem;
  }
`;

const NavigationContainer = styled.nav`
  height: 100%;
  width: 100%;

  @media screen and (max-width: 815px) {
    display: none;
  }
`;

const NavigationItemContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 100%;
  margin: 0 0 0 40%;
  padding: 0;

  list-style: none;

  @media screen and (max-width: 815px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: unset;

    margin: 0;
    padding: inherit;
  }
`;

const NavItem = styled.li`
  margin: 0;
  padding: 0;

  @media screen and (max-width: 815px) {
    margin-bottom: 1rem;

    font-size: 1.5rem;

    animation: ${(props) =>
        props.isAnimating
          ? sidebarTranslateAnimationEnter
          : sidebarTranslateAnimationExit}
      ${(props) => props.timing && props.timing}s
      cubic-bezier(0.645, 0.045, 0.355, 1);
    /* animation-delay: 1s; */
  }
`;

const NavigationContainerMobile = styled.div`
  @media screen and (max-width: 815px) {
    position: fixed;
    right: 0;

    height: calc(100vh - 2rem);
    width: calc(50% - 2rem);
    padding: 1rem;
    background-color: ${(props) =>
      props.theme === 'dark' ? '#25282f' : '#ffffff'};

    box-shadow: 0 0 0.6rem
      ${(props) => (props.theme === 'dark' ? '#0d1321' : '#dce1de')};

    animation: ${(props) => {
        return props.isAnimating
          ? sidebarTranslateAnimationEnter
          : sidebarTranslateAnimationExit;
      }}
      1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export {
  HeaderContainer,
  HeaderText,
  NavigationContainer,
  NavigationContainerMobile,
  NavigationItemContainer,
  NavItem
};
