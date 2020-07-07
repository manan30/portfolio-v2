import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SVGIcon from '../SVGIcon';
import LinksContainer from '../LinksContainer';

const CardContainer = styled.div`
  flex: ${(props) => props.flex && props.flex};

  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
  min-width: ${(props) => props.minWidth && props.minWidth};
  margin: ${(props) => props.margin && props.margin};
  padding: 1rem;

  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.theme === 'dark' ? '#121212' : '#fafffd'};
  box-shadow: 0 0 0.6rem
    ${(props) => (props.theme === 'dark' ? '#0d1321' : '#dce1de')};

  ${(props) => props.animation && props.animation};
  transition: all 0.5s ease-in-out;
`;

const PageText = styled.div`
  height: ${(props) => props.height && props.height};
  margin-top: ${(props) => props.marginTop && props.marginTop};
  margin-left: ${(props) => props.marginLeft && props.marginLeft};

  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight && props.fontWeight};

  overflow: hidden;
`;

const SVGIconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  height: 2rem;

  svg {
    height: 1.3rem;
    width: 1.3rem;
  }
`;

function Card({ children, animation, options, ...styles }) {
  const [hovered, setHovered] = useState(false);

  return (
    <CardContainer animation={animation} {...styles}>
      {children}
      {options.type === 'project' && (
        <>
          <PageText
            fontSize="1.2rem"
            fontWeight="bolder"
            marginTop="0.8rem"
            marginLeft="0.2rem"
          >
            {options.project.name}
          </PageText>
          <PageText
            height="3rem"
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
              margin: '0.5rem 0 0 0'
            }}
          />
          <LinksContainer links={options.project.links} />
        </>
      )}
    </CardContainer>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  animation: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.string
  ]),
  options: PropTypes.objectOf(PropTypes.any)
};

Card.defaultProps = {
  animation: '',
  options: {}
};

export default Card;
