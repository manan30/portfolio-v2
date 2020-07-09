import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Card from '../components/Card';
import Grid from '../components/Grid';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import { useTheme } from '../providers/ThemeProvider';
import SVGIcon, { SVGIconsContainer } from '../components/SVGIcon';
import PageText from '../components/Text';
import useIsMobile from '../hooks/useIsMobile';

const MainContainer = styled.div`
  margin-top: 8rem;

  @media screen and (max-width: 815px) {
    margin-top: 4rem;
    padding: 0;
  }
`;

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
    allExperiencesJson: { edges: experienceData }
  } = useStaticQuery(
    graphql`
      query ExperiencesQuery {
        allExperiencesJson {
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

  const { themeState } = useTheme();
  const isMobile = useIsMobile();

  return (
    <Layout>
      <SEO title="Experience" />
      <MainContainer>
        <Grid>
          {experienceData.map(({ node: exp }, i) => {
            const idx = i;
            return (
              <Card
                key={idx}
                theme={themeState.themePreference}
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
                  {exp.work.map((w) => (
                    <li>
                      <PageText fontSize="0.85rem">{w}</PageText>
                    </li>
                  ))}
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
                        <SVGIcon type={tech} />
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
