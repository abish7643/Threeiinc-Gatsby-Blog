const postQuery = `
query postQuery {
    allContentfulBlog(
        sort: { fields: [createdAt], order: DESC }
        filter: { node_locale: { eq: "en-US" }
    }
    ) {
        edges {
            node {
                id
                title
                slug
                category {
                    title
                    id
                }
                authorData {
                    authorName
                    authorSlug
                }
                createdAt
                shortDescription
                featuredImage {
                    fluid(maxWidth: 600, quality: 70, toFormat: WEBP) {
                        src
                    }
                }
            }
        }
    }
}`

const authorQuery = `
query authorQuery {
    allContentfulAuthorModel(
        sort: { fields: [createdAt], order: DESC }
        filter: { node_locale: { eq: "en-US" } }
    ) {
        edges {
            node {
                id
                authorName
                authorSlug
            }
        }
    }
}
`

const queries = [
    {
        query: postQuery,
        transformer: ({ data }) =>
            data.allContentfulBlog.edges.map(({ node }) => node), // optional
        indexName: "posts", // overrides main index name, optional
        settings: {
            // optional, any index settings
        },
    },
    {
        query: authorQuery,
        transformer: ({ data }) =>
            data.allContentfulAuthorModel.edges.map(({ node }) => node), // optional
        indexName: "authors", // overrides main index name, optional
        settings: {
            // optional, any index settings
        },
    },
]

module.exports = queries
