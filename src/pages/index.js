import Img from 'gatsby-image';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import { useTheme } from '../providers/ThemeProvider';

const TextTranslateAnimation = (percent) => keyframes`
  from {
    opacity: 0;
    transform: translateY(${percent})
  }

  to {
    opacity: 1;
    transform: translateY(0)
  }
`;

const TitleTranslateAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-150%)
  }

  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

const PageText = styled.div`
  margin-bottom: 1rem;

  color: var(
    ${(props) =>
      props.type === 'title' ? '--color-secondary' : 'color-primary'}
  );

  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight && props.fontWeight};

  transition: all 0.3s ease-in-out;

  animation: ${TextTranslateAnimation('200%')}
    ${(props) => props.timing && props.timing} ease-in-out;
`;

const TitleText = styled(PageText)`
  font-size: 4rem;

  animation: ${TitleTranslateAnimation} 1.5s cubic-bezier(0.215, 0.61, 0.355, 1);

  @media screen and (max-width: 815px) {
    font-size: 2.5rem;
  }
`;

const IntroContainer = styled.div`
  padding: 10rem 0 10rem 4rem;

  @media screen and (max-width: 815px) {
    margin-top: 6rem;
    padding: 0;
  }
`;

function IndexPage() {
  const { themeState } = useTheme();

  return (
    <Layout>
      <SEO title="Home" />
      <IntroContainer>
        <TitleText
          type="title"
          fontWeight="bolder"
          color={
            themeState.themePreference && themeState.themePreference === 'dark'
              ? '#f8f7ff'
              : '#404e7c'
          }
        >
          Hello, I&apos;m Manan
        </TitleText>
        <PageText fontSize="1rem" timing="1s">
          Enthusiastic Full-Stack&nbsp;
          <span role="img" aria-label="programmer empji">
            👨‍💻
          </span>
        </PageText>
        <PageText fontSize="1rem" timing="1.2s">
          JavaScript is&nbsp;
          <span role="img" aria-label="heart_emoji">
            ❤️
          </span>
        </PageText>
        <PageText fontSize="1rem" timing="1.4s">
          Pragmatist&nbsp;
          <span role="img" aria-label="emoji">
            👂
          </span>
        </PageText>
        <PageText fontSize="1rem" timing="1.6s">
          Aspiring&nbsp;
          <span role="img" aria-label="man_cook emoji">
            👨‍🍳
          </span>
        </PageText>
        <PageText fontSize="1rem" timing="1.8s">
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
