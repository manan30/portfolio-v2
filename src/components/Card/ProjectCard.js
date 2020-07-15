import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useTheme } from '../../providers/ThemeProvider';
import LinksContainer from '../LinksContainer';
import SVGIcon, { SVGIconsContainer } from '../SVGIcon';
import PageText from '../Text';
import { ProjectCardContainer, ProjectCardHovered } from './styled';

function ProjectCard({ options, ...styles }) {
  const [hovered, setHovered] = useState(false);
  const [animating, setAnimating] = useState(false);
  const { themeState } = useTheme();

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
      themePreference={themeState.themePreference}
      toggled={themeState.toggled}
      onMouseEnter={() => handleAnimations()}
      onMouseLeave={() => handleAnimations('mouseout')}
      {...styles}
    >
      {!hovered ? (
        <img
          style={{
            height: 'inherit',
            width: '100%',
            padding: '0',
            backgroundColor: 'black',
            borderRadius: '0.5rem',
            objectPosition: 'center center',
            objectFit: 'cover'
          }}
          alt={options.project.imageAltText}
          src={options.project.image.childImageSharp.fluid.src}
        />
      ) : (
        <ProjectCardHovered
          animating={animating}
          themePreference={themeState.themePreference}
          toggled={themeState.toggled}
        >
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
                  <SVGIcon name={tech} />
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
