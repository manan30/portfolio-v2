import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ProjectCard from '../components/Card/ProjectCard';
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
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
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
              <ProjectCard
                key={idx}
                width={`${Math.floor(Math.random() * 50)}rem`}
                theme={themeState.themePreference}
                options={{ type: 'project', project }}
                animationTime={2 + i * 0.3}
              />
            );
          })}
        </Grid>
      </div>
    </Layout>
  );
}

export default Projects;
