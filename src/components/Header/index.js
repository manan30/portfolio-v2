import { Link, useStaticQuery, graphql } from 'gatsby';
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
  const {
    allPagesJson: { edges: pagesData }
  } = useStaticQuery(graphql`
    query {
      allPagesJson {
        edges {
          node {
            linkTo
            linkText
          }
        }
      }
    }
  `);

  const [scrolled, setScrolled] = useState(false);
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const [animating, setAnimating] = useState(false);
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

  const handleAnimations = (action) => {
    if (action === 'close') {
      setAnimating(false);
      setTimeout(() => {
        setSidebarVisibility(false);
      }, 800);
    } else {
      setSidebarVisibility(true);
      setAnimating(true);
    }
  };

  return (
    <>
      <HeaderContainer shadow={scrolled} theme={themeState.themePreference}>
        <Link to="/">
          <HeaderText theme={themeState.themePreference}>Manan</HeaderText>
        </Link>
        {!isMobile && (
          <>
            <NavigationContainer>
              <NavigationItemContainer>
                {pagesData.map(({ node: page }, i) => {
                  const idx = i;
                  return (
                    <Link to={`/${page.linkTo}`} key={idx}>
                      <NavItem>{page.linkText}</NavItem>
                    </Link>
                  );
                })}
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
          </>
        )}

        {isMobile && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginLeft: 'auto'
            }}
            role="button"
            tabIndex="-1"
            onClick={handleAnimations}
            onKeyDown={() => {}}
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
        <NavigationContainerMobile
          theme={themeState.themePreference}
          isAnimating={animating}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%'
            }}
            role="button"
            tabIndex="-1"
            onClick={() => handleAnimations('close')}
            onKeyDown={() => {}}
          >
            <SVGIcon
              type="Close"
              fill={
                themeState.themePreference === 'dark' ? '#f8f7ff' : '#404e7c'
              }
            />
          </div>
          <NavigationItemContainer>
            {pagesData.map(({ node: page }, i) => {
              const idx = i;
              return (
                <Link to={`/${page.linkTo}`} key={idx}>
                  <NavItem timing={1.2 + i * 0.2} isAnimating={animating}>
                    {page.linkText}
                  </NavItem>
                </Link>
              );
            })}
          </NavigationItemContainer>
        </NavigationContainerMobile>
      )}
    </>
  );
}

export default Header;
