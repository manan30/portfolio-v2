import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;

  height: 2rem;
  width: calc(100% - 2rem);
  padding: 1rem;

  background-color: #ffffff;

  box-shadow: ${(props) => (props.shadow ? '0 0 0.6rem #dce1de' : 'none')};
  transition: all 0.3s ease-in-out;
`;

const NavigationContainer = styled.nav`
  height: 100%;
`;

const NavigationItemContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 100%;
  margin: 0 0 0 40%;
  padding: 0;

  list-style-type: none;
`;

const NavItem = styled.li`
  margin: 0;
  padding: 0;
`;

export {
  HeaderContainer,
  NavigationContainer,
  NavigationItemContainer,
  NavItem,
};
