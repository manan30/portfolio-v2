import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import Spinner from '../components/Spinner';
import PageText from '../components/Text';
import { useTheme } from '../providers/ThemeProvider';
import { MainContainer } from '../styles/GlobalStyles';

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
      <SEO title="Page Not found" />
      {hasMounted ? (
        <MainContainer
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            marginTop: '0',
            flexDirection: `${isMobile && 'column'}`
          }}
        >
          <Img
            fluid={placeholder.childImageSharp.fluid}
            style={{
              width: `${isMobile ? '100%' : '50%'}`,
              flex: '1 0 auto'
            }}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              marginLeft: `${isMobile ? '0' : '5rem'}`
            }}
          >
            <PageText
              fontSize={`${isMobile ? '1.8rem' : '3rem'}`}
              fontWeight="bolder"
              style={{
                marginBottom: '1rem',
                textAlign: 'center',
                color: `${
                  themeState.toggled
                    ? `var(--color-primary-${themeState.themePreference})`
                    : 'var(--initial-color-primary)'
                }`
              }}
            >
              I have some bad news for you
            </PageText>
            <PageText
              style={{
                textAlign: 'center',
                color: `${
                  themeState.toggled
                    ? `var(--color-secondary-${themeState.themePreference})`
                    : 'var(--initial-color-secondary)'
                }`
              }}
            >
              The page you might be looking for has been removed or is temporary
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
                  color: '#fff9ec',
                  cursor: 'pointer'
                }}
              >
                <PageText fontWeight="bolder">BACK TO HOMEPAGE</PageText>
              </button>
            </Link>
          </div>
        </MainContainer>
      ) : (
        <Spinner />
      )}
    </Layout>
  );
};

export default NotFoundPage;
