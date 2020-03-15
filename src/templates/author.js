import React from 'react'
import { graphql, navigate } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './blog.css'
import Footer from '../components/footer'
import NavBlackText from '../components/navBlackText'

const AuthorTemplate = (props) => {
    return (
        <Layout>
            <NavBlackText/>
            
            <div className='Author__Info__Container'>
                {props.data.authorInfo.edges.map(edge => (
                <h1 key={edge.node.id}>
                   Posts By {edge.node.author}
                   <SEO title={edge.node.seoAuthorSlug} seoTitle={edge.node.authorSlug} author={edge.node.author} seoAuthor={edge.node.author}
                   description='Read All The Posts From The Author of 3i INC | Idiots By Choice!' />
                </h1>
            ))}
            </div>
            <div className='feed__initial__authorposts'>
            <div className='feed'>
            {props.data.authorPosts.edges.map(edge => (
                <div key={edge.node.id} className='card'
                style={{
                    backgroundImage: `linear-gradient(
                        to bottom,
                        rgba(10, 10, 10, 0) 0%,
                        rgba(10, 10, 10, 0.5) 50%,
                        rgba(10, 10, 10, 0.7) 100%),
                        url(${edge.node.featuredImage.fluid.src})`
                        }}
                    onClick={() => navigate(`/blog/${edge.node.slug}`)}>
                    {edge.node.category.map(category => (
                    <p className="card__category">{category.title}</p>
                    ))}
                <p className="card__title">{edge.node.title}</p>
                </div>
            ))}
            </div>
        </div>
        <Footer/>
        </Layout>
    )
}

export default AuthorTemplate



export const query = graphql`
    query AuthorTemplate($author: String) {
        authorInfo: allContentfulBlog(
            limit: 1
            filter: {
            author: {eq: $author}
            node_locale: {eq: "en-US",}
        }){
            edges{
                node{
                    author
                    authorSlug
                    seoAuthorSlug
                }
            }
        }
        authorPosts: allContentfulBlog(

            sort: { fields: [createdAt], order: DESC}
            filter: {

                author: {eq: $author},
                node_locale: {eq: "en-US",}
            }
            ) {
            edges {
                node {
                    title
                    id
                    slug
                    author
                    readDuration
                    shortDescription
                    category {
                        title
                        id
                    }
                    featuredImage {
                        fluid(maxWidth: 1200) {
                            src
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }
    `