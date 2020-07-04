import React, { useState } from 'react';
import styled, { keyframes, useTheme } from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/SEO';

const TextTranslateAnimation = (percent) => keyframes`
  0% {
    transform: translateY(${percent})
  }

  100% {
    transform: translateY(0)
  }
`;

const PageText = styled.div`
  color: ${(props) => {
    return props.color || 'inherit';
  }};
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight && props.fontWeight};

  transition: all 0.3s ease-in-out;

  animation: ${(props) =>
      props.animation === 'title'
        ? TextTranslateAnimation('40%')
        : TextTranslateAnimation('150%')}
    0.8s ease-in-out;
`;

const IntroContainer = styled.div`
  padding: 10rem 0 10rem 4rem;
`;

function IndexPage() {
  const [theme, setTheme] = useState();

  return (
    <Layout setTheme={setTheme}>
      <SEO title="Home" />
      <IntroContainer>
        <PageText
          fontSize="4rem"
          fontWeight="bolder"
          color={
            theme && theme.themePreference === 'dark' ? '#f8f7ff' : '#404e7c'
          }
          animation="title"
        >
          Hello, I&apos;m Manan
        </PageText>
        <PageText fontSize="1rem">
          Enthusiastic Full-Stack&nbsp;
          <span role="img" aria-label="programmer empji">
            👨‍💻
          </span>
        </PageText>
        <PageText fontSize="1rem">
          JavaScript is&nbsp;
          <span role="img" aria-label="heart_emoji">
            ❤️
          </span>
        </PageText>
        <PageText fontSize="1rem">
          Pragmatist&nbsp;
          <span role="img" aria-label="emoji">
            👂
          </span>
        </PageText>
        <PageText fontSize="1rem">
          Aspiring&nbsp;
          <span role="img" aria-label="man_cook emoji">
            👨‍🍳
          </span>
        </PageText>
        <PageText fontSize="1rem">
          Sometimes&nbsp;
          <span role="img" aria-label="thinking-emoji">
            🤔
          </span>
          &nbsp;are we alone in the universe?
        </PageText>
      </IntroContainer>
    </Layout>
  );
}

export default IndexPage;
