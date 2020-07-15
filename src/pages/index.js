import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Card from '../components/Card';
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

const TextPrimary = styled.div`
  margin-left: ${(props) => props.marginLeft && props.marginLeft};
  margin-bottom: 1rem;

  color: ${(props) =>
    props.toggled
      ? `var(--color-primary-${props.themePreference})`
      : 'var(--initial-color-primary)'};

  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight && props.fontWeight};

  transition: all 0.3s ease-in-out;

  animation: ${TextTranslateAnimation('200%')}
    ${(props) => props.timing && props.timing} ease-in-out;
`;

const TextSecondary = styled(TextPrimary)`
  color: ${(props) =>
    props.toggled
      ? `var(--color-secondary-${props.themePreference})`
      : 'var(--initial-color-secondary)'};
  font-size: ${(props) => props.fontSize || '4rem'};

  ${(props) =>
    props.hasAnimation &&
    css`
      animation: ${TitleTranslateAnimation} 1.5s
        cubic-bezier(0.215, 0.61, 0.355, 1);
    `};

  @media screen and (max-width: 815px) {
    font-size: ${(props) => props.fontSize || '2.5rem'};
  }
`;

const IntroContainer = styled.div`
  padding: 10rem 0 5rem 4rem;

  @media screen and (max-width: 815px) {
    margin-top: 6rem;
    padding: 0;
  }
`;

function IndexPage() {
  const { themeState } = useTheme();
  const tech = [
    'JAM Stack',
    'React',
    'GraphQL',
    'Gatsby',
    'Svelte',
    'Firebase',
    'JavaScript',
    'HTML5',
    'CSS3'
  ];

  return (
    <Layout>
      <SEO title="Home" />
      <IntroContainer>
        <TextSecondary
          fontWeight="bolder"
          hasAnimation
          themePreference={themeState.themePreference}
          toggled={themeState.toggled}
        >
          Hello,
          <span role="img" aria-label="wave emoji">
            👋
          </span>
          <> </>
          I&apos;m Manan
        </TextSecondary>
        <TextPrimary
          fontSize="1.5rem"
          marginLeft="0.4rem"
          timing="1s"
          themePreference={themeState.themePreference}
          toggled={themeState.toggled}
        >
          Jack of all trades. Master of some.
        </TextPrimary>
        <TextSecondary
          fontSize="1.2rem"
          marginLeft="0.2rem"
          timing="1.2s"
          themePreference={themeState.themePreference}
          toggled={themeState.toggled}
        >
          <span
            role="img"
            aria-label="heart_emoji"
            style={{ fontSize: '1rem' }}
          >
            ❤️
          </span>
          &nbsp;JavaScript |
          <span role="img" aria-label="emoji" style={{ fontSize: '1rem' }}>
            👂
          </span>
          &nbsp;Pragmatist |&nbsp;
          <span
            role="img"
            aria-label="thinking-emoji"
            style={{ fontSize: '1rem' }}
          >
            🤔
          </span>
          &nbsp;are we alone in the universe?
        </TextSecondary>
      </IntroContainer>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <div style={{ maxWidth: '50rem', marginBottom: '2rem' }}>
          <Card
            themePreference={themeState.themePreference}
            toggled={themeState.toggled}
          >
            <TextSecondary
              fontSize="1rem"
              themePreference={themeState.themePreference}
              toggled={themeState.toggled}
            >
              Thanks for stopping by. I am passionate about working with
              frontend technologies and tools.I also like to read about the
              deepest mysteries of the universe and try to ponder abstract
              things. I&apos;m also an aspiring chef and love to cook
              soul-satisfying and delightful recipes. I love contributing back
              to the open-source community. Open to working on freelance
              projects, so please reach out to me if you are interested in
              creating web apps of any kind. Currently working with&nbsp;
              {tech.map((t, i) => {
                const idx = i;
                return (
                  <TextPrimary key={idx}>
                    <strong>
                      {t}
                      {i !== tech.length - 1 && ', '}
                    </strong>
                  </TextPrimary>
                );
              })}
            </TextSecondary>
            <hr />
            <TextPrimary
              themePreference={themeState.themePreference}
              toggled={themeState.toggled}
            >
              Find me on the Internet
            </TextPrimary>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
