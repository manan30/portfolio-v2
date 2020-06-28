import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import Grid from '../../components/Grid';
import Card from '../../components/Card';

function Experience() {
  const {
    allExperiencesJson: { edges: ExperienceData },
  } = useStaticQuery(
    graphql`
      query {
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

  return (
    <Layout>
      <SEO title="Experience" />
      <div style={{ marginTop: '10rem' }}>
        <Grid>
          {ExperienceData.map(({ node: exp }, i) => {
            const idx = i;
            return (
              <Card key={idx}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bolder' }}>
                    {exp.position}
                  </div>
                  <div style={{ fontSize: '0.6rem', marginLeft: 'auto' }}>
                    {exp.timeline}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ fontSize: '0.8rem' }}>{exp.company}</div>
                  <div style={{ fontSize: '0.6rem', marginLeft: 'auto' }}>
                    {exp.location}
                  </div>
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
