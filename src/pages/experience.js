import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Grid from '../components/Grid';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import { useTheme } from '../providers/ThemeProvider';

const PageText = styled.div`
  margin-left: ${(props) => props.marginLeft && props.marginLeft};

  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight && props.fontWeight};
`;

function Experience() {
  const {
    allExperiencesJson: { edges: ExperienceData }
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
      <div style={{ marginTop: '10rem' }}>
        <Grid>
          {ExperienceData.map(({ node: exp }, i) => {
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
              </Card>
            );
          })}
        </Grid>
      </div>
    </Layout>
  );
}

export default Experience;
