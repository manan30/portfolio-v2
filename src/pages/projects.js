import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import Grid from '../components/Grid';
import Card from '../components/Card';
import LinksContainer from '../components/LinksContainer';

const PageText = styled.div`
  margin-top: ${(props) => props.marginTop && props.marginTop};
  margin-left: ${(props) => props.marginLeft && props.marginLeft};

  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight && props.fontWeight};
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

  return (
    <Layout>
      <SEO title="Projects" />
      <div style={{ marginTop: '6rem' }}>
        <Grid>
          {projects.map(({ node: project }, i) => {
            const idx = i;
            return (
              <Card key={idx}>
                <div
                  style={{
                    height: '12rem',
                    width: '100%',
                    backgroundColor: 'black'
                  }}
                />
                <PageText
                  fontSize="1.2rem"
                  fontWeight="bolder"
                  marginTop="0.8rem"
                  marginLeft="0.2rem"
                >
                  {project.name}
                </PageText>
                <PageText
                  fontSize="0.8rem"
                  marginTop="0.5rem"
                  marginLeft="0.2rem"
                >
                  {project.description}
                </PageText>
                <div style={{ display: 'flex', marginTop: '0.5rem' }}>
                  {project.technologies.map((tech, index) => {
                    const key = index;
                    return <div key={key} />;
                  })}
                </div>
                <hr
                  style={{
                    color: '#e5ecf4',
                    backgroundColor: '#e5ecf4',
                    height: '0.1rem',
                    border: 'none',
                    margin: '0.5rem 0 0 0'
                  }}
                />
                <LinksContainer links={project.links} />
              </Card>
            );
          })}
        </Grid>
      </div>
    </Layout>
  );
}

export default Projects;
