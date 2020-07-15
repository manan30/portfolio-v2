import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import BlogIcon from '../../../data/svg/blog.svg';
import DemoIcon from '../../../data/svg/demo.svg';
import GithubIcon from '../../../data/svg/github.svg';
import { useTheme } from '../../providers/ThemeProvider';

function LinksContainer({ links }) {
  const [fillColor, setFillColor] = useState();
  const { themeState } = useTheme();

  useEffect(() => {
    if (!themeState.toggled) {
      const mode = document.documentElement.style.getPropertyValue(
        '--color-mode'
      );
      setFillColor(mode === 'dark' ? '#121212' : '#627c85');
    } else
      setFillColor(
        themeState.themePreference === 'dark' ? '#121212' : '#627c85'
      );
  }, [themeState]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '4rem'
      }}
    >
      {links.map((link, i) => {
        const idx = i;

        return (
          <a
            key={idx}
            href={link.to}
            rel="noreferrer"
            style={{ height: '1.5rem', width: '1.5rem' }}
          >
            {link.type === 'github' && (
              <GithubIcon style={{ fill: fillColor }} />
            )}
            {link.type === 'demo' && <DemoIcon style={{ fill: fillColor }} />}
            {link.type === 'blog' && <BlogIcon style={{ fill: fillColor }} />}
          </a>
        );
      })}
    </div>
  );
}

LinksContainer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
};

LinksContainer.defaultProps = {
  links: []
};

export default LinksContainer;
