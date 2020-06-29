import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import Grid from '../../components/Grid';
import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import { slideInAnimation } from '../../styles/animations';

const PageText = styled.div`
  margin-left: ${(props) => props.marginLeft && props.marginLeft};

  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight && props.fontWeight};
`;

function Education() {
  const {
    allEducationJson: { edges: education }
  } = useStaticQuery(graphql`
    query {
      allEducationJson {
        edges {
          node {
            degree
            fieldOfStudy
            location
            school
            years
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Education" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Grid>
          {education.map(({ node: ed }, i) => {
            const idx = i;
            return (
              <Card
                key={idx}
                animation={
                  i === 0 ? slideInAnimation('left') : slideInAnimation('right')
                }
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <PageText fontSize="1.2rem" fontWeight="bolder">
                    {`${ed.degree} in ${ed.fieldOfStudy}`}
                  </PageText>
                  <PageText fontSize="0.6rem" marginLeft="auto">
                    {ed.years}
                  </PageText>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <PageText>{ed.school}</PageText>
                  <PageText fontSize="0.6rem" marginLeft="auto">
                    {ed.location}
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

export default Education;
