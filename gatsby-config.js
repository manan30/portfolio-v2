module.exports = {
  siteMetadata: {
    title: `Manan Joshi`,
    description: `Get to know me`,
    author: `@mananjoshi`
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `manan-joshi-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
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
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-168037223-1'
      }
    }
  ]
};
