require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `3i INC | 3 Idiots Incorporated.`,
    description: `Idiots by Choice! | 3 Idiots Incorporated.`,
    author: `@abishvijayan`,
    siteUrl: `https://3iinc.xyz`,
    keywords: ``,
    image: ``,
    url: ``,
  },

  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#93e9be`,
        showSpinner: true,
        trickle: true,
        easing: 'ease',
        speed: 500,
        minimum: 0.05,
      },
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: [],
        excludePaths: ["/",'/contact'],
        color: '#93e9be',
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://3iinc.xyz`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
          },
          {
            family: `Poppins`,
            variants: [`200`,`300`,`400`,`500`,`600`,`700`]
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `2g0bd82kkvps`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-155379843-2",
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-analytics`,
      options: {
        appId: "2161218783980671",
        // Include facebook analytics in development.
        // Defaults to false meaning the library will only be loaded in production.
        includeInDevelopment: false,
        // Include debug version of sdk
        // Defaults to false meaning the library will load sdk.js
        debug: false,
        // Can select your language, default will load english
        language: "en_US"
      }
    },
    {
      resolve: `gatsby-remark-images-contentful`,
      options: {
        loading: `lazy`,
        maxWidth: 1200,
        withWebp: true
      },
    },
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
        name: `3i INC | 3 Idiots Incorporation`,
        short_name: `3i`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/threeiinc-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}