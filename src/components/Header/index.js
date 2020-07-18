import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { useTheme } from '../../providers/ThemeProvider';
import SVGIcon from '../SVGIcon';
import ToggleSwitch from '../ToggleSwitch';
import {
  HeaderContainer,
  HeaderText,
  NavigationContainer,
  NavigationContainerMobile,
  NavigationItemContainer,
  NavItem
} from './styled';

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
  const { themeState, isMobile, hasMounted, themeDispatch } = useTheme();

  useEffect(() => {
    if (typeof window === 'undefined') return () => {};

    const scrollHandler = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener('scroll', scrollHandler);

    setTimeout(() => {
      themeDispatch({ type: 'INITIAL_PAGE_TOGGLE' });
    }, 2000);

    return () => window.removeEventListener('scroll', scrollHandler);
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
      <HeaderContainer
        shadow={scrolled}
        themePreference={themeState.themePreference}
        toggled={themeState.toggled}
      >
        <Link to="/">
          <HeaderText
            themePreference={themeState.themePreference}
            toggled={themeState.toggled}
          >
            Manan
          </HeaderText>
        </Link>
        {hasMounted &&
          (!isMobile ? (
            <>
              <NavigationContainer>
                <NavigationItemContainer>
                  {pagesData.map(({ node: page }, i) => {
                    const idx = i;
                    return (
                      <Link to={`/${page.linkTo}`} key={idx}>
                        <NavItem
                          timing={1.2 + i * 0.2}
                          animate={themeState.initialPage}
                        >
                          {page.linkText}
                        </NavItem>
                      </Link>
                    );
                  })}
                  <a href="/resume.pdf">
                    <NavItem
                      timing={1.2 + pagesData.length * 0.2}
                      animate={themeState.initialPage}
                    >
                      Resume
                    </NavItem>
                  </a>
                </NavigationItemContainer>
              </NavigationContainer>
              <ToggleSwitch
                themePreference={themeState.themePreference}
                toggled={themeState.toggled}
              >
                Dark Mode
              </ToggleSwitch>
            </>
          ) : (
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
                name="Menu"
                fill={
                  themeState.toggled
                    ? `var(--color-secondary-${themeState.themePreference})`
                    : 'var(--initial-color-secondary)'
                }
              />
            </div>
          ))}
      </HeaderContainer>

      {sidebarVisibility && (
        <NavigationContainerMobile
          themePreference={themeState.themePreference}
          toggled={themeState.toggled}
          isAnimating={animating}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ToggleSwitch
              themePreference={themeState.themePreference}
              toggled={themeState.toggled}
            >
              Dark Mode
            </ToggleSwitch>
            <div
              style={{
                display: 'flex',
                marginLeft: 'auto'
              }}
              role="button"
              tabIndex="-1"
              onClick={() => handleAnimations('close')}
              onKeyDown={() => {}}
            >
              <SVGIcon
                name="Close"
                fill={
                  themeState.toggled
                    ? `var(--color-secondary-${themeState.themePreference})`
                    : 'var(--initial-color-secondary)'
                }
              />
            </div>
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
            <a href="/resume.pdf">
              <NavItem
                timing={1.2 + pagesData.length * 0.2}
                isAnimating={animating}
              >
                Resume
              </NavItem>
            </a>
          </NavigationItemContainer>
        </NavigationContainerMobile>
      )}
    </>
  );
}

export default Header;
