/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    resolve(
        graphql(request).then(result => {
            if (result.errors) {
                reject(result.errors)
            }
            return result;
        })
    )
});

exports.createPages = ({ actions, graphql }) => {
    const {createPage} = actions;

const getBlog = makeRequest(graphql, `
{
    allContentfulBlog (
        sort: { fields: [createdAt], order: DESC }
        filter: {
            node_locale: {eq: "en-US"}},)
    {
        edges {
            node {
                id
                slug
                authorData{
                    authorName
                    authorSlug
                }
            }
        }
    }
}
`).then(result => {
    result.data.allContentfulBlog.edges.forEach(({ node }) => {
        createPage({
            path: `blog/${node.slug}`,
            component: path.resolve(`src/templates/blog.js`),
            context: {
                id: node.id,
            },
        })
    })
});

const getArchive = makeRequest(graphql, `
{
    allContentfulBlog (
        sort: { fields: [createdAt], order: DESC }
        filter: {
            node_locale: {eq: "en-US"}},)
    {
        edges {
            node {
                id
                slug
            }
        }
    }
}
`).then(result =>  {
    const blogs = result.data.allContentfulBlog.edges
    const blogsPerpage = 9
    const numPages = Math.ceil(blogs.length / blogsPerpage)

    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve("./src/templates/archive.js"),
            context: {
                limit: blogsPerpage,
                skip: i * blogsPerpage,
                numPages,
                currentPage: i + 1
            },
        })
    })
});


const getAuthorPage = makeRequest(graphql, `
{
    allContentfulBlog (
        sort: { fields: [createdAt], order: DESC }
        filter: {
            node_locale: {eq: "en-US"}},
            )
            
    {
        edges {
            node {
                authorData{
                    authorName
                    authorSlug
                }
            }
        }
    }
}
`).then(result => {
    result.data.allContentfulBlog.edges.forEach(({ node }) => {
        createPage({
            path: `idiots/${node.authorData.authorSlug}`,
            component: path.resolve(`src/templates/author.js`),
            context: {
                author: node.authorData.authorName,
            },
        })
    })
});

const authorsArchive = makeRequest(graphql, `
{
    allContentfulBlog (
        sort: { fields: [createdAt], order: DESC }
        filter: {
            node_locale: {eq: "en-US"}},
            )
            
    {
        edges {
            node {
                authorData{
                    authorName
                    authorSlug
                }
            }
        }
    }
}
`).then(result => {
        createPage({
            path: `idiots/`,
            component: path.resolve(`src/templates/contributers.js`),
    })
});

return Promise.all([
    getBlog,
    getArchive,
    getAuthorPage,
    authorsArchive
])
};
