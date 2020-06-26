import styled, { keyframes } from 'styled-components';

const TextTranslateAnimation = (percent) => keyframes`
  0% {
    transform: translateY(${percent})
  }

  100% {
    transform: translateY(0)
  }
`;

const PageText = styled.div`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight && props.fontWeight};

  animation: ${(props) =>
      props.animation === 'title'
        ? TextTranslateAnimation('40%')
        : TextTranslateAnimation('150%')}
    0.8s ease-in-out;
`;

const IntroContainer = styled.div`
  padding: 10rem 0 10rem 4rem;
`;

export { IntroContainer, PageText };
