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
                <div key={edge.node.id}>
                   <div>
                        <h1>Posts By {edge.node.authorData.authorName}</h1>
                   </div>
                   <SEO title={edge.node.authorData.authorName} 
                   keywords={edge.node.authorData.seoAuthorKeywords} 
                   author={edge.node.authorData.authorName}
                   url={`https://3iinc.xyz/idiots/${edge.node.authorData.authorSlug}/`}
                   description={`${edge.node.authorData.authorDescription} ' Read All The Posts From The Author of 3i INC | Idiots By Choice!'`} />

                </div>
                
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
                <a 
                    to={`https://3iinc.xyz/blog/${edge.node.slug}/`}
                    style={{opacity: '0', fontSize: '1px', marginBottom:'-1px'}}>
                        {`https://3iinc.xyz/blog/${edge.node.slug}/`}
                </a>
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
            authorData: {authorName: {eq: $author}}
            node_locale: {eq: "en-US",}
        }){
            edges{
                node{
                    authorData{
                        authorName
                        authorSlug
                        seoAuthorName
                        seoAuthorKeywords
                        authorDescription
                    }
                }
            }
        }
        authorPosts: allContentfulBlog(

            sort: { fields: [createdAt], order: DESC}
            filter: {

                authorData: {authorName: {eq: $author}},
                node_locale: {eq: "en-US",}
            }
            ) {
            edges {
                node {
                    title
                    id
                    slug
                    readDuration
                    shortDescription
                    category {
                        title
                        id
                    }
                    authorData{
                        authorName
                        authorSlug
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