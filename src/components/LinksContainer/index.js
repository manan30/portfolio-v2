import PropTypes from 'prop-types';
import React from 'react';
import blog from '../../images/blog.svg';
import github from '../../images/github.svg';
import demo from '../../images/demo.svg';

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

        let src;
        if (link.type === 'demo') src = demo;
        else if (link.type === 'github') src = github;
        else if (link.type === 'blog') src = blog;

        return (
          <a
            key={idx}
            href={link.to}
            target="_blank"
            rel="noreferrer"
            style={{ height: '1.5rem', width: '1.5rem' }}
          >
            <img
              src={src}
              style={{ height: '100%', width: '100%' }}
              alt={`${link.type}-icon`}
            />
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
