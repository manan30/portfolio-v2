import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import { MainContainer, PageText } from './styled';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <MainContainer>
        <PageText
          fontSize="4rem"
          fontWeight="bolder"
          color="#404e7c"
          animation="title"
        >
          Hello, I&apos;m Manan
        </PageText>
        <PageText fontSize="1rem">
          Enthusiastic Full-Stack&nbsp;
          <span role="img" aria-label="programmer empji">
            👨‍💻
          </span>
        </PageText>
        <PageText fontSize="1rem">
          JavaScript is&nbsp;
          <span role="img" aria-label="heart_emoji">
            ❤️
          </span>
        </PageText>
        <PageText fontSize="1rem">
          Pragmatist&nbsp;
          <span role="img" aria-label="emoji">
            👂
          </span>
        </PageText>
        <PageText fontSize="1rem">
          Aspiring&nbsp;
          <span role="img" aria-label="man_cook emoji">
            👨‍🍳
          </span>
        </PageText>
        <PageText fontSize="1rem">
          Sometimes&nbsp;
          <span role="img" aria-label="thinking-emoji">
            🤔
          </span>
          &nbsp;are we alone in the universe?
        </PageText>
      </MainContainer>
    </Layout>
  );
}

export default IndexPage;
