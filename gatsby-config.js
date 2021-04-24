require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

const queries = require("./src/utils/algolia")

module.exports = {
    siteMetadata: {
        title: `3 Idiots Incorporated`,
        description: `Idiots by Choice! | 3iinc.xyz`,
        author: `@3iinc`,
        siteUrl: `https://3iinc.xyz`,
        keywords: ``,
        image: `https://images.ctfassets.net/2g0bd82kkvps/6YYHEOQ1diL651fE06jWpy/30e2abe4ffe942d9538912f5a6fb4b03/threeiinc-icon.png`,
        url: `https://3iinc.xyz`,
    },

    plugins: [
        {
            // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
            resolve: `gatsby-plugin-algolia`,
            options: {
                appId: process.env.ALGOLIA_APP_ID,
                // Careful, no not prefix this with GATSBY_, since that way users can change
                // the data in the index.
                apiKey: process.env.ALGOLIA_ADMIN_KEY,
                queries,
                chunkSize: 10000, // default: 1000
                settings: {
                    // optional, any index settings
                },
                enablePartialUpdates: true, // default: false
                matchFields: [
                    "slug",
                    "shortDescription",
                    "featuredImage",
                    "title",
                    "authorName",
                ],
            },
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `#93e9be`,
                showSpinner: true,
                trickle: true,
                easing: "ease",
                speed: 500,
                minimum: 0.05,
            },
        },
        {
            resolve: "gatsby-plugin-page-progress",
            options: {
                includePaths: [],
                excludePaths: ["/", "/contact", "/about", "/blog"],
                color: "#93e9be",
            },
        },
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
                once: true, // Defines if animation needs to be launched once
                disable: false, // Flag for disabling animations

                // Advanced Options
                selector: "[data-sal]", // Selector of the elements to be animated
                animateClassName: "sal-animate", // Class name which triggers animation
                disabledClassName: "sal-disabled", // Class name which defines the disabled state
                rootMargin: "0% 50%", // Corresponds to root's bounding box margin
                enterEventName: "sal:in", // Enter event name
                exitEventName: "sal:out", // Exit event name
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Montserrat\:300,400,500,600`,
                    `Playfair Display\:400,500`,
                    `Poppins\:300,400,500,600`, // you can also specify font weights and styles
                ],
                display: "swap",
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://3iinc.xyz`,
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                exclude: [`/thankyouidiot`, `/404`],
                changefreq: `daily`,
                query: `{
                    allSitePage {
                      edges {
                        node {
                          path
                        }
                      }
                    }
                    site {
                      siteMetadata {
                        siteUrl
                      }
                    }
                  }`,
                serialize: ({ site, allSitePage }) =>
                    allSitePage.edges.map((edges) => {
                        let customPriority = 0.8
                        let path = edges.node.path

                        if (path === "/") {
                            customPriority = 1
                        }
                        if (path.match(/blog/)) {
                            customPriority = 0.9
                        }
                        if (path.match(/idiots/)) {
                            customPriority = 0.7
                        }
                        if (path === "/idiots/") {
                            customPriority = 0.9
                        }
                        if (path.match(/about/)) {
                            customPriority = 0.9
                        }
                        if (path.match(/search/)) {
                            customPriority = 0.9
                        }

                        return {
                            url: `${site.siteMetadata.siteUrl}${edges.node.path}`,
                            changefreq: `daily`,
                            priority: customPriority,
                            lastmod: `${new Date()}`,
                        }
                    }),
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_ID,
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
                        resolve: `gatsby-remark-images-contentful`,
                        options: {
                            maxWidth: 960,
                            withWebp: true,
                            backgroundColor: `transparent`,
                            linkImagesToOriginal: false,
                            markdownCaptions: true,
                            showCaptions: [`title`, `alt`],
                        },
                    },
                    {
                        resolve: `gatsby-remark-images-medium-zoom`,
                        options: {},
                    },
                    {
                        resolve: `gatsby-remark-highlight-code`,
                        options: {
                            lineNumbers: true,
                            editable: false,
                            terminal: 'carbon',
                            theme: 'one-dark'
                        },
                    },
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            target: "_blank",
                            rel: "nofollow",
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `3i INC | 3 Idiots Incorporation`,
                short_name: `3i`,
                start_url: `/`,
                background_color: `#2a5298`,
                theme_color: `#2a5298`,
                display: `minimal-ui`,
                icon: `src/images/threeiinc-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
