import PropTypes from 'prop-types';
import React from 'react';
import BlogIcon from '../../images/svg/blog.svg';
import GithubIcon from '../../images/svg/github.svg';
import DemoIcon from '../../images/svg/demo.svg';

function LinksContainer({ links }) {
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
              <GithubIcon style={{ fill: '#203943' }} />
            )}
            {link.type === 'demo' && <DemoIcon style={{ fill: '#203943' }} />}
            {link.type === 'blog' && <BlogIcon style={{ fill: '#203943' }} />}
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
