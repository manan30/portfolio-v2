import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { ProjectCardContainer, ProjectCardHovered } from './styled';
import LinksContainer from '../LinksContainer';
import SVGIcon, { SVGIconsContainer } from '../SVGIcon';
import PageText from '../Text';

function ProjectCard({ options, ...styles }) {
  const [hovered, setHovered] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleAnimations = (type) => {
    if (type === 'mouseout') {
      setAnimating(false);
      setTimeout(() => {
        setHovered(false);
      }, 800);
    } else {
      setAnimating(true);
      setHovered(true);
    }
  };

  return (
    <ProjectCardContainer
      onMouseEnter={() => handleAnimations()}
      onMouseLeave={() => handleAnimations('mouseout')}
      {...styles}
    >
      <>
        <Img
          style={{
            height: 'inherit',
            width: '100%',
            padding: '0',
            backgroundColor: 'black',
            borderRadius: '0.5rem'
          }}
          fluid={options.project.image.childImageSharp.fluid}
          alt={options.project.imageAltText}
          imgStyle={{ borderRadius: '0.5rem' }}
        />
        {hovered && (
          <ProjectCardHovered animating={animating}>
            <PageText
              fontSize="1.2rem"
              fontWeight="bolder"
              marginTop="0.8rem"
              marginLeft="0.2rem"
            >
              {options.project.name}
            </PageText>
            <PageText
              height="9rem"
              fontSize="0.8rem"
              marginTop="0.5rem"
              marginLeft="0.2rem"
            >
              {options.project.description}
            </PageText>
            <SVGIconsContainer>
              {options.project.technologies.map((tech, index) => {
                const key = index;
                return (
                  <div key={key} style={{ marginRight: '0.8rem' }}>
                    <SVGIcon type={tech} />
                  </div>
                );
              })}
            </SVGIconsContainer>
            <hr
              style={{
                color: '#e5ecf4',
                backgroundColor: '#e5ecf4',
                height: '0.1rem',
                border: 'none',
                margin: '0.5rem 0 0 0',
                width: '100%'
              }}
            />
            <LinksContainer links={options.project.links} />
          </ProjectCardHovered>
        )}
      </>
    </ProjectCardContainer>
  );
}

ProjectCard.propTypes = {
  options: PropTypes.objectOf(PropTypes.any)
};

ProjectCard.defaultProps = {
  options: {}
};

export default ProjectCard;
