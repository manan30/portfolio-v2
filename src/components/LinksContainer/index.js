import PropTypes from 'prop-types';
import React from 'react';
import BlogIcon from '../../images/icons/blog.svg';
import GithubIcon from '../../images/icons/github.svg';
import DemoIcon from '../../images/icons/demo.svg';

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

        {
          /* if (link.type === 'demo') src = demo;
        else if (link.type === 'github') src = github;
        else if (link.type === 'blog') src = blog; */
        }

        return (
          <a
            key={idx}
            href={link.to}
            target="_blank"
            rel="noreferrer"
            style={{ height: '1.5rem', width: '1.5rem' }}
          >
            {link.type === 'github' && <GithubIcon />}
            {link.type === 'demo' && <DemoIcon />}
            {link.type === 'blog' && <BlogIcon />}
            {/* <img
              src={src}
              style={{ height: '100%', width: '100%' }}
              alt={`${link.type}-icon`}
            /> */}
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
