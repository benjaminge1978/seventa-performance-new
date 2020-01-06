module.exports = {
  siteMetadata: {
    title: `Seventa Events | Event Planning & Management Agency`,
    description: `We organise events, and we do them well. We create memorable, rewarding and engaging experiences for our clients’ events. Find out more here.`,
    author: `@gatsbyjs`,
    contactEmail: `info@seventa.co.uk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4nlw2v6q7d79`,
        accessToken: `S6JYtIOcEbNXZNjWbxeNt2Jow1h3tpL8MzGGlBx01hQ`,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lexend Deca'],
          display: 'swap'
        }
      }
    },
    'gatsby-plugin-netlify',
  ],
};
