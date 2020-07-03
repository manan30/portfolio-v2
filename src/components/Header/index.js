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
      <button
        type="button"
        style={{ height: '100%', marginLeft: '1rem' }}
        onClick={() => {
          if (themeState.theme === 'light')
            themeDispatch({ type: 'toggle-dark-theme' });
          else themeDispatch({ type: 'toggle-light-theme' });
        }}
      >
        Dark Mode
      </button>
    </HeaderContainer>
  );
}

export default Header;
