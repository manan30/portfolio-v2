import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import Grid from '../../components/Grid';
import { data as ExperienceData } from '../../data/experiences.json';
import Card from '../../components/Card';

function Experience() {
  return (
    <Layout>
      <SEO title="Experience" />
      <div style={{ marginTop: '10rem', paddingBottom: '1rem' }}>
        <Grid>
          {ExperienceData.map((exp, i) => {
            const idx = i;
            return (
              <Card key={idx}>
                <div>{exp.position}</div>
                <div>{exp.company}</div>
                <div>{exp.location}</div>
                <div>{exp.timeline}</div>
              </Card>
            );
          })}
        </Grid>
      </div>
    </Layout>
  );
}

export default Experience;
