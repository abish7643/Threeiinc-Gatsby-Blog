/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, author, keywords, url, image, lang, meta, title, type }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                        keywords
                        image
                    }
                }
            }
        `
    )


    // if (title === '3 Idiots Incorporated. | Idiots by Choice'){
    //     metaTitle = `${title}`;
    // } else {
        // metaTitle = `${title} | 3 Idiots Incorporated. | Idiots By Choice`;
    // }

    const metaTitle = `${title}`;
    const metaDescription = description || site.siteMetadata.description

    const websiteName = site.siteMetadata.title

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: `title`,
                    content: metaTitle,
                },
                {
                    name: `keywords`,
                    content: keywords,
                },

                {
                    name: `author`,
                    content: author,
                },
                {
                    name: `image`,
                    content: image,
                },
                {
                    name: `url`,
                    content: url,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: type,
                },
                {
                    property: `og:url`,
                    content: url,
                },
                {
                    property: `og:image`,
                    content: image,
                },
                {
                    property: `og:site_name`,
                    content: websiteName,
                },
                {
                    name: `twitter:card`,
                    content: `summary_large_image`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `twitter:image`,
                    content: image,
                },
            ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default SEO
