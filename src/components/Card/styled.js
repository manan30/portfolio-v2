import styled, { keyframes } from 'styled-components';

const backgroundAnimation = keyframes`
  from {
    background-color: transparent;
  }

  to {
    background-color: #25283d;
  }
`;

const backgroundAnimationReverse = keyframes`
  from {
    background-color: #25283d;
  }

  to {
    background-color: transparent;
  }
`;

const translateAnimation = keyframes`
  from {
    ${'' /* transform: translateX(-1rem); */}
    opacity: 0;
  }

  to {
    ${'' /* transform: translateX(0); */}
    opacity: 1;
  }
`;

const translateAnimationReverse = keyframes`
  from {
    ${'' /* transform: translateX(0); */}
    opacity: 1;
  }

  to {
    ${'' /* transform: translateX(-1rem); */}
    opacity: 0;
  }
`;

const CardContainer = styled.div`
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
  padding: 1rem;

  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.theme === 'dark' ? '#121212' : '#fafffd'};
  box-shadow: 0 0 0.6rem
    ${(props) => (props.theme === 'dark' ? '#0d1321' : '#dce1de')};

  ${(props) => props.animation && props.animation};
  transition: all 0.5s ease-in-out;
`;

const ProjectCardContainer = styled(CardContainer)`
  flex: 1 0 auto;

  position: relative;

  height: 20rem;
  min-width: 15rem;
  margin: 0 1rem 1rem 0;
  padding: 0;
`;

const ProjectCardHovered = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: calc(100% - 2rem);
  width: calc(100% - 2rem);
  padding: 1rem;

  background-color: #25283d;

  animation: ${(props) =>
      props.animating ? backgroundAnimation : backgroundAnimationReverse}
    1s cubic-bezier(0.39, 0.575, 0.565, 1);

  * {
    animation: ${(props) =>
        props.animating ? translateAnimation : translateAnimationReverse}
      1s cubic-bezier(0.39, 0.575, 0.565, 1);
  }
`;

export { CardContainer, ProjectCardContainer, ProjectCardHovered };
