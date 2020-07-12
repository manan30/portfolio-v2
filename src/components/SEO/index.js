import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
            twitter {
              card
              site
              creator
              description
              image
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: `${title} | ${site.siteMetadata.title}`
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.image}`
        },
        {
          property: `og:url`,
          content: `${site.siteMetadata.siteUrl}`
        },
        {
          name: `twitter:card`,
          content: `${site.siteMetadata.twitter.card}`
        },
        {
          name: `twitter:site`,
          content: `${site.siteMetadata.twitter.site}`
        },
        {
          name: `twitter:creator`,
          content: `${site.siteMetadata.twitter.creator}`
        },
        {
          name: `twitter:description`,
          content: `${site.siteMetadata.twitter.description}`
        },
        {
          name: `twitter:title`,
          content: `${title} | ${site.siteMetadata.title}`
        },
        {
          name: `twitter:image`,
          content: `${site.siteMetadata.twitter.image}`
        }
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default SEO;
