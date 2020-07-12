module.exports = {
  siteMetadata: {
    title: `Manan Joshi`,
    type: `website`,
    description: `Manan Joshi is a passionate full-stack developer and loves working with web technologies. He is interested in building software that empowers the lives of people. He recently graduated with a Masters's Degree in Computer Science from Rochester Institute of Technology and currently lives in Rochester, New York.`,
    siteUrl: `https://mananjoshi.me`,
    image: `https://mananjoshi.me/profile-image.jpg`,
    twitter: {
      card: `summary_large_image`,
      site: `https://mananjoshi.me`,
      creator: `@manan30`,
      description: `Manan Joshi is a passionate full-stack developer and loves working with web technologies. He is interested in building software that empowers the lives of people. Currently he is working with the JAM stack, React, Firebase and GraphQL.`,
      image: `https://mananjoshi.me/profile-image.jpg`
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Manan Joshi`,
        short_name: `@manan30`,
        start_url: `.`,
        display: `minimal-ui`,
        icon: `data/images/profile-image.jpg` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./data`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: { rule: { include: /data/ } }
    }
  ]
};
