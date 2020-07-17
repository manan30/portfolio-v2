import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { css, keyframes } from 'styled-components';
import Card from '../components/Card';
import Grid from '../components/Grid';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import SVGIcon, { SVGIconsContainer } from '../components/SVGIcon';
import PageText from '../components/Text';
import useIsMobile from '../hooks/useIsMobile';
import { useTheme } from '../providers/ThemeProvider';
import { MainContainer } from '../styles/GlobalStyles';

const translateAnimation = keyframes`
  from {
    transform: translateY(80rem);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const generateAnimation = (animationTime) => {
  return css`
    animation: ${translateAnimation} ${animationTime}s
      cubic-bezier(0.86, 0, 0.07, 1);
  `;
};

function Experience() {
  const {
    allWorkJson: { edges: workData }
  } = useStaticQuery(
    graphql`
      query WorkQuery {
        allWorkJson {
          edges {
            node {
              position
              company
              location
              timeline
              work
              tech
            }
          }
        }
      }
    `
  );

  const { themeState, isMobile } = useTheme();

  return (
    <Layout>
      <SEO title="Experience" />
      <MainContainer>
        <Grid>
          {workData.map(({ node: exp }, i) => {
            const idx = i;
            return (
              <Card
                key={idx}
                themePreference={themeState.themePreference}
                toggled={themeState.toggled}
                animation={generateAnimation(2 + idx * 0.2)}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.5rem'
                  }}
                >
                  <PageText
                    fontSize={isMobile ? '1rem' : '1.2rem'}
                    fontWeight="bolder"
                  >
                    {exp.position}
                  </PageText>
                  <PageText
                    fontSize={isMobile ? '0.4rem' : '0.6rem'}
                    marginLeft="auto"
                  >
                    {exp.timeline}
                  </PageText>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <PageText fontSize={isMobile ? '0.6rem' : '0.8rem'}>
                    {exp.company}
                  </PageText>
                  <PageText
                    fontSize={isMobile ? '0.4rem' : '0.6rem'}
                    marginLeft="auto"
                  >
                    {exp.location}
                  </PageText>
                </div>
                <ul
                  style={{
                    height: 'auto',
                    margin: '0',
                    padding: 'inherit',
                    minHeight: '6rem'
                  }}
                >
                  {exp.work.map((w, j) => {
                    const jdx = j;
                    return (
                      <li
                        key={jdx}
                        style={{
                          color: themeState.toggled
                            ? `var(--color-secondary-${themeState.themePreference})`
                            : 'var(--initial-color-secondary)'
                        }}
                      >
                        <PageText fontSize="0.85rem">{w}</PageText>
                      </li>
                    );
                  })}
                </ul>
                <SVGIconsContainer>
                  {exp.tech.map((tech, index) => {
                    const key = index;
                    return (
                      <div
                        key={key}
                        style={{
                          marginRight: '0.8rem',
                          marginBottom: '0.5rem'
                        }}
                      >
                        <SVGIcon name={tech} />
                      </div>
                    );
                  })}
                </SVGIconsContainer>
              </Card>
            );
          })}
        </Grid>
      </MainContainer>
    </Layout>
  );
}

export default Experience;
