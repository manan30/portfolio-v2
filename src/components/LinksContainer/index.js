import PropTypes from 'prop-types';
import React from 'react';
import BlogIcon from '../../../data/svg/blog.svg';
import DemoIcon from '../../../data/svg/demo.svg';
import GithubIcon from '../../../data/svg/github.svg';

function LinksContainer({ links, themePreference }) {
  const fillColor = themePreference === 'dark' ? '#121212' : '#627c85';

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
            target="_blank"
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
  links: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  themePreference: PropTypes.string
};

LinksContainer.defaultProps = {
  links: [],
  themePreference: ''
};

export default LinksContainer;
