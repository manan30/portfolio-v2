import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Card from '../components/Card';
import Grid from '../components/Grid';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import { useTheme } from '../providers/ThemeProvider';

function Projects() {
  const {
    allProjectsJson: { edges: projects }
  } = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsJson {
        edges {
          node {
            name
            description
            image
            imageAltText
            links {
              type
              to
            }
            technologies
          }
        }
      }
    }
  `);

  const { themeState } = useTheme();

  return (
    <Layout>
      <SEO title="Projects" />
      <div style={{ marginTop: '8rem' }}>
        <Grid type="masonary">
          {projects.map(({ node: project }, i) => {
            const idx = i;
            return (
              <Card
                key={idx}
                flex="1 0 auto"
                height="20rem"
                width={`${Math.floor(Math.random() * 50)}rem`}
                minWidth="15rem"
                margin="0 1rem 1.5rem 0"
                theme={themeState.themePreference}
                options={{ type: 'project', project }}
              />
            );
          })}
        </Grid>
      </div>
    </Layout>
  );
}

export default Projects;
