import styled, { keyframes } from 'styled-components';

const TextTranslateAnimation = (percent) => keyframes`
  0% {
    transform: translateY(${percent})
  }

  100% {
    transform: translateY(0)
  }
`;

const MainContainer = styled.div`
  height: calc(100vh - 4rem);
  width: calc(100vw - 10rem);
  margin-top: 4rem;
  padding: 0 5rem;
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
  margin-top: 15rem;
  margin-left: 8rem;
`;

export { MainContainer, PageText, IntroContainer };
