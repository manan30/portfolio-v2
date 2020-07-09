module.exports = {
  siteMetadata: {
    title: `Manan Joshi`,
    description: `Get to know me`,
    author: `@manan30`
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
    }
  ]
};
