import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Grid from '../components/Grid';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import { useTheme } from '../providers/ThemeProvider';
import SVGIcon, { SVGIconsContainer } from '../components/SVGIcon';

const MainContainer = styled.div`
  margin-top: 8rem;

  @media screen and (max-width: 815px) {
    margin-top: 6rem;
    padding: 0;
  }
`;

const PageText = styled.div`
  margin-left: ${(props) => props.marginLeft && props.marginLeft};

  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight && props.fontWeight};
`;

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

  return (
    <Layout>
      <SEO title="Experience" />
      <MainContainer>
        <Grid>
          {experienceData.map(({ node: exp }, i) => {
            const idx = i;
            return (
              <Card key={idx} theme={themeState.themePreference}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <PageText fontSize="1.2rem" fontWeight="bolder">
                    {exp.position}
                  </PageText>
                  <PageText fontSize="0.6rem" marginLeft="auto">
                    {exp.timeline}
                  </PageText>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <PageText fontSize="0.8rem">{exp.company}</PageText>
                  <PageText fontSize="0.6rem" marginLeft="auto">
                    {exp.location}
                  </PageText>
                </div>
                <ul
                  style={{ height: '4.5rem', margin: '0', padding: 'inherit' }}
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
                      <div key={key} style={{ marginRight: '0.8rem' }}>
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
