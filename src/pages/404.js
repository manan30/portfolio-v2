import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Layout from '../components/layout';
import PageText from '../components/Text';
import SEO from '../components/SEO';
import { MainContainer } from '../styles/GlobalStyles';
import { useTheme } from '../providers/ThemeProvider';

const NotFoundPage = () => {
  const { placeholder } = useStaticQuery(
    graphql`
      {
        placeholder: file(relativePath: { eq: "images/scarecrow.png" }) {
          childImageSharp {
            fluid(maxWidth: 640) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  const { themeState, hasMounted, isMobile } = useTheme();

  return (
    <Layout page="404">
      <SEO title="404: Not found" />
      <MainContainer
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          marginTop: '0',
          flexDirection: `${hasMounted && isMobile && 'column'}`
        }}
      >
        <Img
          fluid={placeholder.childImageSharp.fluid}
          style={{
            width: `${hasMounted && isMobile ? '100%' : '50%'}`,
            flex: '1 0 auto'
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginLeft: `${hasMounted && isMobile ? '0' : '5rem'}`
          }}
        >
          <PageText
            fontSize={`${hasMounted && isMobile ? '1.8rem' : '3rem'}`}
            fontWeight="bolder"
            style={{
              color: `${
                themeState.toggled
                  ? `var(--color-primary-${themeState.themePreference})`
                  : 'var(--initial-color-primary)'
              }`
            }}
          >
            I have some bad news for you
          </PageText>
          <br />
          <PageText
            style={{
              color: `${
                themeState.toggled
                  ? `var(--color-secondary-${themeState.themePreference})`
                  : 'var(--initial-color-secondary)'
              }`
            }}
          >
            The page you might be looking for might be removed or is temporary
            unavailable.
          </PageText>
          <Link to="/">
            <button
              type="button"
              style={{
                height: '3rem',
                marginTop: '2rem',
                padding: '1rem',
                border: 'none',
                backgroundColor: '#eb6b5c',
                color: '#fff9ec'
              }}
            >
              <PageText fontWeight="bolder">BACK TO HOMEPAGE</PageText>
            </button>
          </Link>
        </div>
      </MainContainer>
    </Layout>
  );
};

export default NotFoundPage;
