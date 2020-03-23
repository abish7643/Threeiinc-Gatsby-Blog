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
        excludePaths: ["/",'/contact','/about', '/blog'],
        color: '#93e9be',
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.3, // Percentage of an element's area that needs to be visible to launch animation
          once: true,// Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
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
      resolve: `gatsby-remark-images-contentful`,
      options: {
        maxWidth: 500,
        backgroundColor: 'black',
        loading: 'lazy',
      }
    },
      
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 550,
            backgroundColor: 'black',
            loading: 'lazy',
          }
        },
      ]
      }
    },
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