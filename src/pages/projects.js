import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Grid from '../components/Grid';
import Layout from '../components/layout';
import LinksContainer from '../components/LinksContainer';
import SEO from '../components/SEO';

const PageText = styled.div`
  height: ${(props) => props.height && props.height};
  margin-top: ${(props) => props.marginTop && props.marginTop};
  margin-left: ${(props) => props.marginLeft && props.marginLeft};

  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight && props.fontWeight};

  overflow: hidden;
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
              <Card key={idx} height="24rem">
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
                  height="3rem"
                  fontSize="0.8rem"
                  marginTop="0.5rem"
                  marginLeft="0.2rem"
                >
                  {project.description}
                </PageText>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '0.5rem',
                    height: '2rem'
                  }}
                >
                  {project.technologies.map((tech, index) => {
                    const key = index;
                    return (
                      <div
                        key={key}
                        style={{
                          height: '1.5rem',
                          width: '1.5rem',
                          marginRight: '0.5rem',
                          backgroundImage: `url(./images/icons/${tech.toLowerCase()}.svg)`,
                          backgroundColor: 'red'
                        }}
                      />
                    );
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
