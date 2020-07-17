import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Card from '../components/Card';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import SVGIcon, { SVGIconsContainer } from '../components/SVGIcon';
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

const TitleTranslateAnimation = (percent) => keyframes`
  from {
    opacity: 0;
    transform: translateX(${percent})
  }

  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

const TextPrimary = styled.div`
  display: ${(props) => props.display && props.display};

  margin-left: ${(props) => props.marginLeft && props.marginLeft};
  margin-bottom: ${(props) => props.marginBottom || '1rem'};

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
      animation: ${TitleTranslateAnimation('-150%')} 1.5s
        cubic-bezier(0.215, 0.61, 0.355, 1);
    `};

  @media screen and (max-width: 815px) {
    font-size: ${(props) => props.fontSize || '2.5rem'};
  }
`;

const IntroContainer = styled.div`
  width: 50%;
  padding: 10rem 0 5rem 0;

  @media screen and (max-width: 815px) {
    margin: 6rem 0;
    padding: 0;
    width: 100%;
  }
`;

const CardContainer = styled.div`
  width: 50%;
  max-width: 50rem;
  margin-bottom: 2rem;
  margin-left: auto;

  animation: ${TitleTranslateAnimation('150%')} 1.5s
    cubic-bezier(0.215, 0.61, 0.355, 1);

  width: 100%;
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
  const socialIcons = [
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/mananjoshi1741/' },
    { name: 'Twitter', link: 'https://twitter.com/Manan_30' },
    { name: 'Github', link: 'https://github.com/manan30' },
    { name: 'Medium', link: 'https://medium.com/@Manan_30' },
    { name: 'Dev', link: 'https://dev.to/manan30' },
    { name: 'Email', link: 'mailto:mananjoshi1995@gmail.com' }
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
      <CardContainer>
        <Card
          themePreference={themeState.themePreference}
          toggled={themeState.toggled}
        >
          <TextSecondary
            fontSize="1rem"
            themePreference={themeState.themePreference}
            toggled={themeState.toggled}
            style={{ textAlign: 'center' }}
          >
            Thanks for stopping by. I am passionate about working with
            <strong> frontend technologies and tools</strong>
            <>
              <>
                . I also like to read about the
                <strong> deepest mysteries of the universe </strong>
                and try to ponder about abstract things. I&apos;m also an
                aspiring chef and love to cook soul-satisfying and delightful
                recipes. I love contributing back to the open-source community.
                I am looking for a
              </>
              <strong> full-time software engineering role</strong>
              <>
                . Open to working on
                <strong> freelance projects</strong>
                <>
                  , so please reach out to me if you are interested in creating
                  web apps of any kind. Currently working with the&nbsp;
                </>
              </>
            </>
            {tech.map((t, i) => {
              const idx = i;
              return (
                <TextPrimary
                  key={idx}
                  display="inline-block"
                  marginBottom="0"
                  themePreference={themeState.themePreference}
                  toggled={themeState.toggled}
                >
                  <strong>
                    {t}
                    {i !== tech.length - 1 && <>,&nbsp;</>}
                  </strong>
                </TextPrimary>
              );
            })}
          </TextSecondary>
          <hr
            style={{
              color: '#e5ecf4',
              backgroundColor: '#e5ecf4',
              height: '1px',
              border: 'none',
              margin: '0.8rem 0',
              width: '100%'
            }}
          />
          <TextPrimary
            fontSize="1.2rem"
            fontWeight="bold"
            themePreference={themeState.themePreference}
            toggled={themeState.toggled}
            style={{ textAlign: 'center', marginBottom: '1.2rem' }}
          >
            Find me on the Internet
          </TextPrimary>
          <SVGIconsContainer style={{ justifyContent: 'space-evenly' }}>
            {socialIcons.map((icon, i) => {
              const idx = i;
              return (
                <a
                  key={idx}
                  href={icon.link}
                  rel="noreferrer"
                  style={{
                    marginRight: '1rem'
                  }}
                >
                  <SVGIcon name={icon.name} />
                </a>
              );
            })}
          </SVGIconsContainer>
        </Card>
      </CardContainer>
    </Layout>
  );
}

export default IndexPage;
