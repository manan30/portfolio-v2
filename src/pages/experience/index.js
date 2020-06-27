import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import Grid from '../../components/Grid';
import { data as ExperienceData } from '../../data/experiences.json';

function Experience() {
  return (
    <Layout>
      <SEO title="Experience" />
      <div style={{ marginTop: '10rem' }}>
        <Grid>
          {ExperienceData.map((exp, i) => {
            const idx = i;
            return (
              <div
                key={idx}
                style={{ border: '1px solid black', padding: '1rem' }}
              >
                <div>{exp.position}</div>
                <div>{exp.company}</div>
                <div>{exp.location}</div>
                <div>{exp.timeline}</div>
              </div>
            );
          })}
        </Grid>
      </div>
    </Layout>
  );
}

export default Experience;
