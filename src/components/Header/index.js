import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { useTheme } from '../../providers/ThemeProvider';
import {
  HeaderContainer,
  HeaderText,
  NavigationContainer,
  NavigationItemContainer,
  NavItem
} from './styled';
import ToggleSwitch from '../ToggleSwitch';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { themeState, themeDispatch } = useTheme();

  useEffect(() => {
    if (typeof window === 'undefined') return () => {};

    const scrollHandler = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <HeaderContainer shadow={scrolled} theme={themeState.theme}>
      <Link to="/">
        <HeaderText theme={themeState.theme}>Manan</HeaderText>
      </Link>
      <NavigationContainer>
        <NavigationItemContainer>
          <Link to="/experience">
            <NavItem>Experience</NavItem>
          </Link>
          <Link to="/education">
            <NavItem>Education</NavItem>
          </Link>
          <Link to="/projects">
            <NavItem>Projects</NavItem>
          </Link>
          <Link to="/blogs">
            <NavItem>Blogs</NavItem>
          </Link>
          <Link to="/skills">
            <NavItem>Skills</NavItem>
          </Link>
          <Link to="/interests">
            <NavItem>Interests</NavItem>
          </Link>
        </NavigationItemContainer>
      </NavigationContainer>
      <ToggleSwitch
        onClickHandler={() => {
          if (themeState.theme === 'light')
            themeDispatch({ type: 'toggle-dark-theme' });
          else themeDispatch({ type: 'toggle-light-theme' });
        }}
        themePreference={themeState.theme}
      >
        Dark Mode
      </ToggleSwitch>
    </HeaderContainer>
  );
}

export default Header;
