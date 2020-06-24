import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import {
  HeaderContainer,
  NavigationContainer,
  NavigationItemContainer,
  NavItem,
} from './styled';

function Header() {
  const [scrolled, setScrolled] = useState(false);

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
    <HeaderContainer shadow={scrolled}>
      <NavigationContainer>
        <NavigationItemContainer>
          <Link to="/experience">
            <NavItem>Experience</NavItem>
          </Link>
          <Link to="/education">
            <NavItem>Education</NavItem>
          </Link>
          <Link to="/experience">
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
    </HeaderContainer>
  );
}

export default Header;
