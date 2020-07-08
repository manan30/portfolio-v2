import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { useTheme } from '../../providers/ThemeProvider';
import {
  HeaderContainer,
  HeaderText,
  NavigationContainer,
  NavigationItemContainer,
  NavItem,
  NavigationContainerMobile
} from './styled';
import ToggleSwitch from '../ToggleSwitch';
import SVGIcon from '../SVGIcon';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const { themeState, themeDispatch } = useTheme();
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    if (typeof window === 'undefined') return () => {};

    const scrollHandler = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return () => {};

    if (window.innerWidth < 815) setIsMobile(true);
    else setIsMobile(false);

    return () => {};
  }, []);

  return (
    <>
      <HeaderContainer shadow={scrolled} theme={themeState.themePreference}>
        <Link to="/">
          <HeaderText theme={themeState.themePreference}>Manan</HeaderText>
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
            if (themeState.themePreference === 'light')
              themeDispatch({ type: 'toggle-dark-theme' });
            else themeDispatch({ type: 'toggle-light-theme' });
          }}
          themePreference={themeState.themePreference}
        >
          Dark Mode
        </ToggleSwitch>
        {isMobile && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginLeft: 'auto'
            }}
            onClick={() => setSidebarVisibility(true)}
            onKeyDown={() => {}}
            role="button"
            tabIndex="-1"
          >
            <SVGIcon
              type="Menu"
              fill={
                themeState.themePreference === 'dark' ? '#f8f7ff' : '#404e7c'
              }
            />
          </div>
        )}
      </HeaderContainer>
      {sidebarVisibility && (
        <NavigationContainerMobile theme={themeState.themePreference} />
      )}
    </>
  );
}

export default Header;
