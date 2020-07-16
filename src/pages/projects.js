import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/Card/ProjectCard';
import Grid from '../components/Grid';
import Layout from '../components/layout';
import SEO from '../components/SEO';

const MainContainer = styled.div`
  margin-top: 8rem;

  @media screen and (max-width: 815px) {
    margin-top: 4rem;
    padding: 0;
  }
`;

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

  return (
    <Layout>
      <SEO title="Projects" />
      <MainContainer>
        <Grid type="masonary">
          {projects.map(({ node: project }, i) => {
            const idx = i;
            return (
              <ProjectCard
                key={idx}
                width={`${Math.floor(Math.random() * 50)}rem`}
                options={{ type: 'project', project }}
                animationTime={2 + i * 0.3}
              />
            );
          })}
        </Grid>
      </MainContainer>
    </Layout>
  );
}

export default Projects;
