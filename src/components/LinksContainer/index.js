import PropTypes from 'prop-types';
import React from 'react';
import BlogIcon from '../../images/svg/blog.inline.svg';
import GithubIcon from '../../images/svg/github.inline.svg';
import DemoIcon from '../../images/svg/demo.inline.svg';

function LinksContainer({ links }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: '0.8rem'
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
