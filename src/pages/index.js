import React from 'react';
import styled, { keyframes } from 'styled-components';
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

const PageText = styled.div`
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

const TitleText = styled(PageText)`
  color: ${(props) =>
    props.toggled
      ? `var(--color-secondary-${props.themePreference})`
      : 'var(--initial-color-secondary)'};
  font-size: 4rem;

  animation: ${TitleTranslateAnimation} 1.5s cubic-bezier(0.215, 0.61, 0.355, 1);

  @media screen and (max-width: 815px) {
    font-size: 2.5rem;
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
  const data = useStaticQuery(graphql`
    query {
      placeholder: file(relativePath: { eq: "images/profile-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const { themeState } = useTheme();

  return (
    <Layout>
      <SEO title="Home" />
      <IntroContainer>
        <TitleText
          fontWeight="bolder"
          themePreference={themeState.themePreference}
          toggled={themeState.toggled}
        >
          Hello, I&apos;m Manan
        </TitleText>
        <PageText
          fontSize="1rem"
          timing="1s"
          themePreference={themeState.themePreference}
          toggled={themeState.toggled}
        >
          Enthusiastic Full-Stack&nbsp;
          <span role="img" aria-label="programmer empji">
            👨‍💻
          </span>
        </PageText>
        <PageText
          fontSize="1rem"
          timing="1.2s"
          themePreference={themeState.themePreference}
          toggled={themeState.toggled}
        >
          JavaScript is&nbsp;
          <span role="img" aria-label="heart_emoji">
            ❤️
          </span>
        </PageText>
        <PageText
          fontSize="1rem"
          timing="1.4s"
          themePreference={themeState.themePreference}
          toggled={themeState.toggled}
        >
          Pragmatist&nbsp;
          <span role="img" aria-label="emoji">
            👂
          </span>
        </PageText>
        <PageText
          fontSize="1rem"
          timing="1.6s"
          themePreference={themeState.themePreference}
          toggled={themeState.toggled}
        >
          Aspiring&nbsp;
          <span role="img" aria-label="man_cook emoji">
            👨‍🍳
          </span>
        </PageText>
        <PageText
          fontSize="1rem"
          timing="1.8s"
          themePreference={themeState.themePreference}
          toggled={themeState.toggled}
        >
          Sometimes&nbsp;
          <span role="img" aria-label="thinking-emoji">
            🤔
          </span>
          &nbsp;are we alone in the universe?
        </PageText>
      </IntroContainer>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <div style={{ maxWidth: '50rem', marginBottom: '2rem' }}>
          <Card animation={`animation: css```}>
            <PageText
              fontSize="1rem"
              themePreference={themeState.themePreference}
              toggled={themeState.toggled}
            >
              Thanks for stopping by. I am passionate about working with
              frontend technologies and tools and always keep on learning new
              things. I also like to read about the deepest mysteries of the
              universe and try to ponder abstract things. I&apos;m also an
              aspiring chef and love to cook soul-satisfying and delightful
              recipes. I love contributing back to the open-source community.
              Open to working on freelance projects, so please reach out to me
              if you are interested in creating web apps of any kind. Currently
              working with
              {', '}
              <strong>React</strong>
              {', '}
              <strong>Gatsby</strong>
              {', '}
              <strong>GraphQL</strong>
              {', '}
              <strong>Firebase</strong>
              {', '}
              <strong>Node</strong>
              {', '}
              <strong>JavaScript</strong>
              {', '}
              <strong>HTML5</strong>
              {', '}
              <strong>CSS3</strong>
            </PageText>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
